import type { Pair } from './types'
import checkPair from './check-pair';

export const CDR = 'cdr';

export default function cdr<A, B>(pair: Pair<A, B>): B {
	checkPair(pair);

	return pair(CDR);
}
