const cars = [ {
  name: 'Девятка', price: 30500
}, {
  name: 'Москвич 412', price: 27700
}, {
  name: 'BMW', price: 23100
} ]

class MyBestAwesomeArrayEver {
  constructor(data){
    this.data = data;
  }
  find( predicate ) { 
    /***   - 1 -   ***/ 

for (let i=0;this.data.length;i++){
  let result = this.data[i];
  if (predicate(result)==true) return result
}

}

some( predicate ){ { /***   - 2 -   ***/ }

for (let i=0; this.data.length; i++){
  
if (this[i]===true) return true;
  
}

return;
}


  reduce( predicate ){ { /***   - 4 -   ***/ }
// Почти решил
//
// let car = new MyBestAwesomeArrayEver(cars);
// console.log(car.reduce((acum,elem)=>{return acum + elem.price}))
// Output: (acum,elem)=>{return acum + elem.price}0305002770023100 
// ??????

  let value = arguments[0];

                     
  for (let i=0; i < this.data.length; i++) {

value = predicate(value, this.data[i]);

    }

            return value;

}
}
// console.log('hello');

// Решение 1.1
// Почему bmw будет равно undefined? Как найти в массиве cars объект BMW?
const bmw = cars.find( ( car ) => {
  return car.name === 'BMW';
} )

// Решение 1.2

let car = new MyBestAwesomeArrayEver(cars);

console.log( car.find(( car ) => {
  return car.name === 'BMW';
}));
// <------------------------ 2 ------------------------------->
// Решение 2.1

console.log( cars.some(( car ) => {
  return car.price > 30000;
}));

// Решение 2.2
console.log( cars.some(( car ) => {
  return car.price > 50000;
})) 

// Решение 2.3
console.log( cars.every(( car ) => {
  return car.price > 50000;
 }));
 
// Решение 2.4
console.log( cars.every(( car ) => {
  return car.hasOwnProperty('name') && (car.name !==undefined) && (car.name !=='');
 }))
// <------------------------ 3 ------------------------------->
 
// Решение 3.1
console.log(cars.map(elem => elem.price).includes(27700));

// Решение 3.2
console.log(!!cars.find(elem=>elem.price==27700));

// Решение 3.3
console.log(cars.find(elem=>elem.name.includes('12')).name);

// <------------------------ 4 ------------------------------->
// Решение 4.1
console.log(cars.reduce((acum,elem)=>{return acum + elem.price},0));

// Решение 4.2


// <------------------------ 5 ------------------------------->
console.log(cars.sort((elem1, elem2)=>{return elem1.price-elem2.price}));

// <------------------------ 6 ------------------------------->
// Решение 6.1
//
// Вопрос как написать это решение при помощи одного console.log используя callbackи, т.е. как исправить решение ниже
//
// console.log((cars)=>{
//   let answer = cars.splice(()=>{
//  let index = cars.findIndex((elem)=>{

//               if (elem.name.indexOf('в')) return true
                                  
//   });
//   return index
  
// },1);

// return cars;
// });


cars.splice(()=>{
  let index = cars.findIndex((elem)=>{
 
               if (elem.name.indexOf('в')) return true
                                   
   });
   return index
   
 },1);
 
 console.log(cars);

// Решение 6.2

function v(obj){
  let index = obj.findIndex((elem)=>{
 
               if (elem.name.indexOf('в')) return true
                                   
   });
   return index
   
 }
 
 function transmit(obj, index){
   obj.push(obj[index]);
   obj.splice(index,1);
 }
 
 // для удаления первого элемента массива с буквой в в названии
 cars.splice(()=>{
  let index = cars.findIndex((elem)=>{
 
               if (elem.name.indexOf('в')) return true
                                   
   });
   return index
   
 },1);
 
 transmit(cars, v(cars));
 console.log(cars);
