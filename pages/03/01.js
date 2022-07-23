
const countriesList = {
  africa: {
    trs: 'Африка',
    animals: [ {
      name: 'crocodile',
      trs: 'Крокодил'
    }, {
      name: 'leo',
      trs: 'Лев'
    }, {
      name: 'monkey',
      trs: 'Обезьяна'
    } ]
  },
  australia: {
    trs: 'Австралия',
    animals: [ {
      name: 'kangaroo',
      trs: 'Кенгуру'
    }, {
      name: 'koala',
      trs: 'Коала'
    } ]
  },
  asia: {
    trs: 'АзиЯ',
    animals: [ {
      name: 'tiger',
      trs: 'Тигр'
    }, {
      name: 'panda',
      trs: 'Панда'
    }, {
      name: 'elephant',
      trs: 'Слон'
    } ]
  }
}

const redGreen = {
  contry: false,
  animal: false
}

const countries = document.querySelector( '#countries' )
const animals = document.querySelector( '#animals' )

function fl() {
  // добавляет к option "выберерте животное"
  const firstOption = document.createElement( 'option' )
  firstOption.text = `Выберите животное`
  firstOption.value = 'null'
  firstOption.selected = true
  animals.prepend( firstOption )
}
function reboot() {
// перерисовка всего списка
  animals.innerHTML = ''

  const keys = Object.keys( countriesList )

  for ( country of keys ) {

    const animal =  countriesList[ country ].animals

    for ( let i = 0; i < animal.length; i++ ) {
      const option = document.createElement( 'option' )

      option.text = animal[ i ].trs
      option.value = animal[ i ].name
      animals.append( option )

    }
  }
  fl()

}

function makeAnimalList( CL ) {
  // CL - массив

  animals.innerHTML = ''
  for ( let i = 0; i < CL.animals.length; i++ ) {
    const option = document.createElement( 'option' )

    option.text = CL.animals[ i ].trs
    option.value = CL.animals[ i ].name
    animals.append( option )
  }
  fl()
}

const COLOR_RESULT = document.querySelector( '#animal_selecting_result' )

function green() {

  if ( COLOR_RESULT.classList.contains( 'bg-red-300' ) ) COLOR_RESULT.classList.remove( 'bg-red-300' )
  COLOR_RESULT.classList.add( 'bg-lime-300' )
};

function red() {

  if ( COLOR_RESULT.classList.contains( 'bg-lime-300' ) ) COLOR_RESULT.classList.remove( 'bg-lime-300' )
  COLOR_RESULT.classList.add( 'bg-red-300' )
  COLOR_RESULT.innerHTML = `<div id="animal_selecting_result" class="text-sm bg-red-300 mt-2 p-2">
          Ничего не выбрано
        </div>`
}

function RG() {

  if ( !redGreen.animal || !redGreen.contry ) red()
  if ( redGreen.animal && redGreen.contry ) green()

}


window.addEventListener( 'load', () => {

  reboot( countriesList )
  RG()

} )

countries.addEventListener( 'change', ( event ) => {
  const cntr = event.target.value

  if (  event.target.value !== 'null' ) {
    redGreen.contry = true
    RG()

    makeAnimalList( countriesList[ cntr ] )
  } else {
    redGreen.contry = false

    reboot()
    RG()
  }

} )

animals.addEventListener( 'change', ( event ) => {
  const result = document.querySelector( '#animal_selecting_result' )

  const animalSelection = countriesList[ countries.value ].animals
  const animal = animalSelection.find(  ( elem )  =>  elem.name === animals.value )

  if ( animal !== undefined  ) {
    redGreen.animal = true

    const verstka = `<p>Вы выбрали:</p>
  <p><b>Страну: </b><i>${countriesList[ countries.value ].trs}</i></p>
  <p><b>Животное: </b><i>${animal.trs}</i></p>
  `
    result.innerHTML = verstka
    RG() // окрас

  } else {
    redGreen.animal = false
    RG() // окрас
  }

} )
