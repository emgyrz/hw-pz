const chessBoardEl = document.getElementById( 'chess_board2_1' )
const sum = chessBoardEl.children

for ( let i = 0; i < sum.length; i++ ) {
  if ( !check( i ) ) decision( i )
}


function check( num ) {
  // выводит true, если тип элемента номер num === типу элемента массива CB (идеальной доски)
  // т.е. true - элемент занимает законное место
  const idealValue = ( CB[ num ] === 1 ) ? "I" : "B"
  const value = sum[ num ].tagName
  return value === idealValue
}


function decision( num ) {
  let i = 1
  const current = sum[ num ]
  let next = sum[ num + i ]

  while ( next.tagName === current.tagName ) {
    i++
    next = sum[ num + i ]
  }

  current.before( next )
}



class ChessBoardNormalizer {
  constructor( el ) {
    this.el = el
    this._check()
  }

  _check() {
    const childrenCount = this.el.children.length
    const sqrt = Math.sqrt( childrenCount )
    return ( ( sqrt % 1 ) !== 0 )
  }
}

