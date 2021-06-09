// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  const handleNameChange = event => setName(event.target.value)
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={handleNameChange} />
    </div>
  )
}

function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

function Display({animal}) {
  return animal ? <div>{`Your favorite animal is: ${animal}!`}</div> : null
}

function App() {
  const [animal, setAnimal] = React.useState('')

  const handleAnimalChange = event => {
    setAnimal(event.target.value)
  }

  return (
    <form>
      <Name />
      <FavoriteAnimal animal={animal} onAnimalChange={handleAnimalChange} />
      <Display animal={animal} />
    </form>
  )
}

export default App
