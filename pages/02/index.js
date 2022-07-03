const cars = [ {
  name: 'Девятка', price: 30500
}, {
  name: 'Москвич 412', price: 27700
}, {
  name: 'BMW', price: 23100
} ]



class MyBestAwesomeArrayEver extends Array {

  find( predicate ) {
    /** *   - 1 -   ***/

    for ( let i = 0;this.length;i++ ) {
      const result = this[ i ]
      if ( predicate( result ) === true ) return result
    }

  }

  some( predicate ) {
    { /** *   - 2 -   ***/ }

    for ( let i = 0; this.length; i++ ) {

      if ( this[ i ] === true ) return true

    }

    return
  }


  reduce( predicate ) {
    { /** *   - 4 -   ***/ }

    let value = arguments[ 0 ]

    for ( let i = 0; i < this.length; i++ ) {

      if ( !( isFinite( value ) ) ) {
        value = predicate( 0, this[ i ] )
      } else {
        value = predicate( value, this[ i ] )
      }

    }

    return value

  }
}


// Решение 1.1
// Почему bmw будет равно undefined? Как найти в массиве cars объект BMW?
const bmw = cars.find( ( car ) => car.name === 'BMW' )

// Решение 1.2

const car2 = MyBestAwesomeArrayEver.from( cars )

console.log( car2.find( ( car ) => car.name === 'BMW' ) )
// <------------------------ 2 ------------------------------->
// Решение 2.1

console.log( cars.some( ( car ) => car.price > 30000 ) )

// Решение 2.2
console.log( cars.some( ( car ) => car.price > 50000 ) )

// Решение 2.3
console.log( cars.every( ( car ) => car.price > 50000 ) )

// Решение 2.4
console.log( cars.every(
  ( car ) => car.hasOwnProperty( 'name' ) && ( car.name !== undefined ) && ( car.name !== '' ) )
)
// <------------------------ 3 ------------------------------->

// Решение 3.1
console.log( cars.map( ( elem ) => elem.price ).includes( 27700 ) )

// Решение 3.2
console.log( !!cars.find( ( elem ) => elem.price === 27700 ) )

// Решение 3.3
console.log( cars.find( ( elem ) => elem.name.includes( '12' ) ).name )

// <------------------------ 4 ------------------------------->
// Решение 4.1
console.log( cars.reduce( ( acum, elem ) => acum + elem.price, 0 ) )

// Решение 4.2


// <------------------------ 5 ------------------------------->
console.log( cars.sort( ( elem1, elem2 ) => elem1.price - elem2.price ) )


cars.splice( ( () => {
  const index = cars.findIndex( ( elem ) => {

    if ( elem.name.indexOf( 'в' ) ) return true

  } )
  return index

} )(), 1 )

console.log( cars )

// Решение 6.2

function v( obj ) {
  return obj.findIndex( ( elem ) => elem.name.includes( 'в' ) )

}

function transmit( obj, index ) {
  obj.push( obj[ index ] )
  obj.splice( index, 1 )
}

// для удаления первого элемента массива с буквой в в названии
cars.splice( ( () => cars.findIndex( ( elem ) => elem.name.includes( 'в' ) ) )(), 1 )

transmit( cars, v( cars ) )
console.log( cars )
