import isPair from './is-pair';
import type { Pair } from './types';

export default function checkPair<A, B>(pair: Pair<A, B>) {
  if (!isPair(pair)) {
    const incorrectValue = typeof pair === 'object' ? JSON.stringify(pair, null, 4) : String(pair);

    throw new Error(`Argument must be pair, but it was '${incorrectValue}'`);
  }
}
