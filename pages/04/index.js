/* eslint-disable no-multiple-empty-lines,indent */

_runTask( 1, () => {
  /**
   * код для задачи 1
   */
} )



_runTask( '2', () => {
  class TreeNode {
    constructor( x, children ) {
      this.type = 'node'
      this.x = x
      this.children = Array.isArray( children ) ? children : []
    }
  }

  class TreeLeaf {
    constructor( x ) {
      this.type = 'leaf'
      this.x = x
    }
  }

  const n = ( x, children ) => new TreeNode( x, children )
  const l = ( x ) => new TreeLeaf( x )

  const root = n( 0, [
    n( 3, [
      l( 11 ),
      n( 13, [ l( 26 ) ] ),
      n( 17, [
        n( 23, [] ),
        n( 29, [ l( 33 ) ] )
      ] )
    ] ),
    n( 5, [
      n( 15, [ l( 22 ) ] ),
      l( 19 ),
      n( 10, [ n( 27 ) ] )
    ] ),
  ] )
/*
             ____ 0 ____
           /             \
       _ 3 _             _ 5 _
      /  |  \          /   |   \
    11   13  17      15    19   10
        /   /  \      \          |
      26   23   29     22        27
                /
               33
*/

  function logToDepth(  ) {
    /**
     * код для задачи 2 писать тут
     */
  }

  function logFromDepth( nl ) {
    /**
     * код для задачи 2 писать тут
     */
  }

  logToDepth( root )
  logFromDepth( root )
} )






























function _runTask( taskNameOrIndex, cb ) {
  console.log( `--- running task "${taskNameOrIndex}" ---` )
  cb()
  console.log( `--- task "${taskNameOrIndex}" ends ---\n` )
}
