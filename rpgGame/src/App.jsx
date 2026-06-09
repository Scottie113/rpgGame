import { useState } from 'react'
import GameLayout from './assets/components/layout/GameLayout'
import TopBar from './assets/components/layout/TopBar'
import BottomPanel from './assets/components/layout/BottomPanel'
import SceneViewr from './assets/components/scene/SceneViewr'

import './App.css'

function App() {
  return (
    <div>
        <TopBar />
      <GameLayout />
      <BottomPanel />
        <SceneViewr />
    </div>
  )
}

export default App
