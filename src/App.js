/**
 * This React app serves as a very thin “wrapper” around what is otherwise pure three.js code.
 * Although various “React three.js components” are available, these can get complicated and
 * possibly overly opinionated for beginners. We take the approach here of separating React and
 * three.js code from each other as much as possible.
 */
import { useState, useEffect, useRef } from 'react'

import './App.css'
import Menu from './Menu'
import Game from './Game'

const App = () => {
  const [mainMenu, setMainMenu] = useState(true)

  return (
    <>

      <section className="App">
        <header></header>
        {mainMenu 
        ? <Menu 
            callback={setMainMenu}
          /> 
        : <Game></Game>
        }
        {/* <code>
          <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </code> */}
      </section>
    </>
  )
}

export default App