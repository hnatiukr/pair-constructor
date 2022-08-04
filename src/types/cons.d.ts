import type { Car } from './car'
import type { Cdr } from './cdr'

export type Pair<A, B> = {
  init: boolean;
  (message: Car): A;
  (message: Cdr): B;
};
