export function pipe<A, B>(a: A, fnA: (a: A) => B): B
export function pipe<A, B, C>(a: A, fnA: (a: A) => B, fnB: (b: B) => C): C
export function pipe<A, B, C, D>(
  a: A,
  fnA: (a: A) => B,
  fnB: (b: B) => C,
  fnC: (c: C) => D
): D
export function pipe<A, B, C, D, E>(
  a: A,
  fnA: (a: A) => B,
  fnB: (b: B) => C,
  fnC: (c: C) => D,
  fnD: (d: D) => E
): E

export function pipe(a: any, ...fns: Array<(a: any) => any>) {
  return fns.reduce((a, f) => f(a), a)
}

export let identity = <A>(a: A): A => a
