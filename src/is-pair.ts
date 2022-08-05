import type { Pair } from './types';

/**
 * Check if the passed argument is a pair (`isPair`)
 * @example
 * const pair = cons(5, 'hello');
 *
 * isPair(pair); // true
 * isPair(5); // false
 */
export default function isPair<A, B>(cons: Pair<A, B>): boolean {
  return typeof cons === 'function' && cons.init;
}
