export interface Left<A> {
  _tag: 'Left'
  value: A
}

export interface Right<A> {
  _tag: 'Right'
  value: A
}

export let left = <A>(value: A): Left<A> => ({
  _tag: 'Left',
  value,
})

export let right = <A>(value: A): Right<A> => ({
  _tag: 'Right',
  value,
})

type Either<A, B> = Right<A> | Left<B>

export let map = <A, B, C>(fn: (value: A) => C) => {
  return (either: Either<A, B>): Either<C, B> => {
    switch (either._tag) {
      case 'Left':
        return left(either.value)
      case 'Right':
        return right(fn(either.value))
    }
  }
}
export let bimap = <A, B, C, D>(fnA: (value: A) => C, fnB: (value: B) => D) => {
  return (either: Either<A, B>): Either<C, D> => {
    switch (either._tag) {
      case 'Right':
        return right(fnA(either.value))
      case 'Left':
        return left(fnB(either.value))
    }
  }
}
