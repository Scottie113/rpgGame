import React from 'react'
import { useState } from 'react'
import './TopBar.css'

function TopBar() {
        const [health, setHealth] = useState(100)
        const [lightning, setLightning] = useState(50)
        const [gold, setGold] = useState(0)
        const [level, setLevel] = useState(1)

  return (
    <nav className="top-bar">

   
      <ul>
        <li>Active Quest: </li>
        <li>
           <button>Map</button>
        </li>
        <li>
            <button>Inventory</button>
        </li>
        <li>
            <button>Quest</button>
        </li>
        <li>
            <button>Shops</button>
        </li>

      </ul>

    </nav>
  )
}

export default TopBar
