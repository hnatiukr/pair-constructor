import type { Pair } from './types';

export default function isPair<A, B>(cons: Pair<A, B>): boolean {
	return typeof cons === 'function' && cons.init;
}
