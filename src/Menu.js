import React, {useEffect} from 'react'
import './Menu.css'

const Menu = (props) => {

  const handleButtonClick = () => {
    props.callback(false)
  }

  // useEffect(() => {
  // }, [])
  

  return (
    <div className="menu__background">
      <div className="menu__content">
        <h1>Welcome to Circuitry!</h1>
        <div className="menu__description">
          <h3>Description</h3>
          <p>This is a fun mini-game designed by: </p>
          <ul style={{textAlign: "left"}}>
            <li>Michael Reza</li>
            <li>Caitlin Colina</li>
            <li>Hassan Hage Hassan</li>
          </ul>
          <h3>Instructions</h3>
          <p>Use the arrow keys to move around the circuit board, follow the wires to the CPU to win</p>
          <p>Beware of Dead Ends...</p>
        </div>
        <button onClick={() => handleButtonClick()}>
          <h1>Play</h1>
        </button>
      </div>
    </div>
  )
}

export default Menu