import type { Pair } from './types';
import checkPair from './check-pair';

export const CDR = 'cdr';

/**
 * Get the second element of the pair (`cdr`)
 * @example
 * const pair = cons(5, 'hello');
 *
 * cdr(pair); // hello
 */
export default function cdr<A, B>(pair: Pair<A, B>): B {
  checkPair(pair);

  return pair(CDR);
}
