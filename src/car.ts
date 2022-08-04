import type { Pair } from './types'
import checkPair from './check-pair';

export const CAR = 'car';

export default function car<A, B>(pair: Pair<A, B>): A {
	checkPair(pair);

	return pair(CAR);
}
