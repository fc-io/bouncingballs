import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BouncingBallsDivComponent,
  BouncingBallsCanvasComponent,
} from "react-bouncing-balls";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BouncingBallsDivComponent src="rainbowrose.jpg" cellSize="10"/>
    </div>
  )
}

export default App
