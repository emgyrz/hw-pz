const l = console.log

// эталон доски

const chessBoardEl = document.getElementById( 'chess_board' )
const sum = chessBoardEl.children

function shiftLeft( firstEl, secondEl ) {
  // сдвиг клеток влево
  // firstEl сдвигаемый элемент
  // secondEl куда двигаем

  secondEl.before( firstEl )
};

function shiftRight( firstEl, secondEl ) {
  // сдвиг клеток вправо
  // firstEl сдвигаемый элемент
  // secondEl куда двигаем
  secondEl.after( firstEl )
}

function check( num ) {
  // выводит true, если тип элемента номер num === типу элемента массива CB (идеальной доски)
  // т.е. true - элемент занимает законное место
  const idealValue = ( CB[ num ] === 1 ) ? "I" : "B"
  const value = chessBoardEl.children[ num ].tagName
  return value === idealValue
}

function checkSum() {
  // чек сумма текущих элементов
  const result = []
  // const sum = chessBoardEl.children
  for ( const elem of sum ) {

    if ( elem.tagName === 'I' ) result.push( 1 )
    if ( elem.tagName === 'B' ) result.push( 0 )

  }
  return result.join( '' )

}

function OK() {
  // проверяет достигнута ли раскладка необходимой
  return !( checkSum() - CB.join( '' ) )
}

function decision( num ) {
// функция принимает решение, куда сдвинуть элементы - в право или в лево
  if ( !check( num + 1 ) ) {
    shiftRight( chessBoardEl.children[ num ], chessBoardEl.children[ num + 1 ] )
    return
  }
  if ( !check( num - 1 ) ) {
    shiftLeft( chessBoardEl.children[ num ], chessBoardEl.children[ num - 1 ] )
    return
  }
}

// 1 - Black <I></I>
// 0 - White <B></B>

const CB = [ 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1 ]

// l( check( 2 ) )

// const one = chessBoardEl.children[ 0 ]
// const two = chessBoardEl.children[ 1 ]
// const three = chessBoardEl.children[ 2 ]
// const four = chessBoardEl.children[ 3 ]

// // shiftRight( one, two )
// shiftLeft( four, three )
// // two = one

// логика

// 1 проход уверено делает
for ( let i = 0; i < sum.length; i++ ) {
  if ( !check( i ) ) decision( i )
}


// решение, которое никак не может досчитаться на моем браузере
// do {
//   for ( let i = 0; i < sum.length; i++ ) {
//     if ( !check( i ) ) decision( i )
//   }

// } while ( !OK() )
