import * as F from '@/lib/Functions'
import * as E from '@/lib/Either'
import * as O from '@/lib/Option'

/**
 * Example on functor
 *
 * A functor is a type constructor that wraps a value in a context. When the functor 'Option' is
 * mapped it receives a function that can be applied to the wrapped value and returns a new functor
 * of the same type.
 */
let map = () => {
  let name = O.some('Eder')
  F.pipe(
    name,
    O.map((name) => `Hello, ${name}!`),
    O.map(console.log)
  )
}

/**
 * Example on bi-functor
 *
 * The either constructor is a bi-functor that exposes it's mapping interface
 * allowing a type to be either a 'Right' or a 'Left' value. The bimap function
 * allows the user to map the value of the 'Right' or 'Left' value.
 */
let either = () => {
  let formValue = E.right('password123')

  F.pipe(
    formValue,
    E.bimap(
      (value) => `The value ${value} is valid`,
      (error) => `The value ${error} is invalid`
    ),
    E.map(console.log)
  )
}

F.pipe(null, map, either)
