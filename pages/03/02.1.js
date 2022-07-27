
class ChessBoardNormalizer {
  constructor( el ) {
    this.el = el
    this.squaresCount = el.children.length
    this.linesCount = this._calcLines()
    this.currentInd = 0
  }


  _calcLines() {
    const sideCount = Math.sqrt( this.squaresCount )
    const isSidesEqual = ( sideCount % 1 ) === 0
    if ( !isSidesEqual ) {
      throw new Error( 'invalid count of board squares' )
    }
    return sideCount
  }


  run() {
    while ( this.currentInd < this.squaresCount ) {
      if ( !this._checkCurrent() ) {
        this._decision()
      }
      this.currentInd++
    }
  }


  _checkCurrent() {
    const ind = this.currentInd
    if ( ind === 0 ) return true
    const ch = this.el.children
    const prevInd = ind - 1

    // чётное ли количество линий на доске
    const isLinesEven = this.linesCount % 2 === 0

    // является ли предыдущий элемент последним в ряду
    // т.е. его порядковый номер (prevInd + 1) делится на общее количество линий без остатка
    const isPrevSquareLastOnLine = ( ( prevInd + 1 ) % this.linesCount ) === 0

    if ( isLinesEven && isPrevSquareLastOnLine ) {
      // если количество рядов и колонок чётное, и сейчас проверяется первый элемент в ряду ( ch[ ind ] ),
      // то его цвет должен быть такой же, как у предыдущего квадрата
      return ch[ prevInd ].tagName === ch[ ind ].tagName
    }
    return ch[ prevInd ].tagName !== ch[ ind ].tagName
  }


  _decision() {
    const ch = this.el.children
    let i = 1
    const current = ch[ this.currentInd ]
    let next = ch[ this.currentInd + i ]

    while ( next.tagName === current.tagName ) {
      i++
      next = ch[ this.currentInd + i ]
    }

    current.before( next )
  }

}



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




Array.prototype.slice.call( document.querySelectorAll( '.boardWrp > button' ) ).forEach( ( btn ) => {
  btn.onclick = ( ev ) => new ChessBoardNormalizer( ev.currentTarget.parentElement.lastElementChild ).run()
} )
