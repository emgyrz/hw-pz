
const house = {
  number: 13,
  street: "Ленина",
  residents: {
    old: 5,
    young: 3,
    total: 21,
  }
}

const {     number,     residents:      people     } = house
const {     total,      old:      elderly,      young     } = people

const  countOfPeopleInDaHouse =     total     -     elderly     -     young

const { x } = {     x:      countOfPeopleInDaHouse      }

console.log( number - x ) // 0

;
[ 1, 2, 3 ].filter( x => x< 10 ).map( x => ([x,x])).map(c => new Point(c[0], c[1]))
