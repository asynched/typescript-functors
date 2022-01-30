interface Some<A> {
  _tag: 'Some'
  value: A
}

interface None {
  _tag: 'None'
}

export type Option<A> = Some<A> | None

export let some = <A>(value: A): Some<A> => ({
  _tag: 'Some',
  value,
})

export let none = <A>(): None => ({
  _tag: 'None',
})

export let map = <A, B>(fn: (value: A) => B) => {
  return (option: Option<A>): Option<B> => {
    switch (option._tag) {
      case 'Some':
        return some(fn(option.value))
      case 'None':
        return none()
    }
  }
}
