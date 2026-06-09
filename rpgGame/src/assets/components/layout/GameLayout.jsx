import React from 'react'
import { useState } from 'react'
import './GameLayout.css'
import image from '../../images/istockphoto-1416937202-612x612.jpg' // Adjust the path to your image file
import healthIcon from '../../images/images.png' // Adjust the path to your health icon 
import lightningIcon from '../../images/lightning.png' // Adjust the path to your lightning icon


function GameLayout() {

    const [health, setHealth] = useState(100)
    const [lightning, setLightning] = useState(50)
    const [gold, setGold] = useState(0)
    const [level, setLevel] = useState(1)

  return (
    <nav className="top-bar">

   
      <ul>
        <li>Fighter Name</li>
        <li>
            <img src={healthIcon} alt="Health Icon" />
            Health: {health}
        </li>
        <li>
            <img src={lightningIcon} alt="Lightning Icon" />
            Lightning: {lightning}
        </li>
        <li className="rightcol">
          <span>Gold: {gold}</span>
          <span>Level: {level}</span>
          <img src={image} alt="Description" />
        </li>

      </ul>

    </nav>
  )
}

export default GameLayout
