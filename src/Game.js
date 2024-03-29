import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { createDemoBoard } from './circuit-boards/demo-board'

const DEFAULT_FIELD_OF_VIEW = 75
const DEFAULT_NEAR_PLANE = 0.1
const DEFAULT_FAR_PLANE = 1000
const DEFAULT_DISTANCE_FROM_ORIGIN = 15
const RADIAN_CONVERSION = Math.PI / 180

const Game = () => {
  const [board, setBoard] = useState(null)
  const [cameraControl, setCameraControl] = useState(false)
  const [mainMenu, setMainMenu] = useState(true)

  const viewport = useRef()

  useEffect(() => {
    const viewportElement = viewport?.current
    if (!viewportElement) {
      return
    }

    const board = createDemoBoard({
      fieldOfView: DEFAULT_FIELD_OF_VIEW,
      width: window.innerWidth,
      height: window.innerHeight,
      nearPlane: DEFAULT_NEAR_PLANE,
      farPlane: DEFAULT_FAR_PLANE
    })

    const { camera, renderer } = board
    camera.position.y = 12
    camera.position.x = 10
    camera.position.z = 25
    camera.lookAt(10, 0, 10)

    viewportElement.innerHTML = '' // Cheapo clearing of prior children.
    viewportElement.appendChild(renderer.domElement)

    board.animate()
    setBoard(board)
  }, [viewport])


  return (
    <section className="App">
        <header></header>
        <main ref={viewport}></main>
        {/* <code>
          <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </code> */}
      </section>
  )
}

export default Game