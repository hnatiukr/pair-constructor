import car from './car';
import cdr from './cdr';
import isPair from './is-pair';
import type { Pair } from './types';
import checkPair from './check-pair';

function stringify<A, B>(a: A): string;

function stringify<A, B>(b: B): string;

/**
 * Convert a pair to a string
 * @example
 * toString(cons('', 10)); // ('', 10)
 */
function stringify<A, B>(pair: Pair<A, B>): string {
	if (!isPair(pair)) {
		return String(pair);
	}

	const left = car(pair);
	const right = cdr(pair);

	return `(${stringify(left)}, ${stringify(right)})`;
}

export default function toString<A, B>(pair: Pair<A, B>): string {
	checkPair(pair);

	return stringify(pair);
}
