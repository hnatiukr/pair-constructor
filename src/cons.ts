import { CAR } from "./car";
import { CDR } from "./cdr";
import type { Car, Cdr } from "./types";

export type Pair<A, B> = {
	init: boolean;
	(message: Car): A;
	(message: Cdr): B;
};

/**
 * Pair constructor (`cons`)
 * @example
 * const pair = cons(5, 'hello');
 * const pair = cons(cons(1, null), 'world');
 */
export default function cons<A, B>(a: A, b: B): Pair<A, B> {
	const pair = (message: Car | Cdr) => {
		switch (message) {
			case CAR:
				return a;
			case CDR:
				return b;
			default:
				throw new Error(`Unknown message '${message}'`);
		}
	};

	pair.init = true;

	return pair as Pair<A, B>;
}
