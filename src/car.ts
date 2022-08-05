import type { Pair } from './types'
import checkPair from './check-pair';

export const CAR = 'car';

/**
 * Get the first element of the pair (`car`)
 * @example
 * const pair = cons(5, 'hello');
 * car(pair); // 5
 */
export default function car<A, B>(pair: Pair<A, B>): A {
	checkPair(pair);

	return pair(CAR);
}
