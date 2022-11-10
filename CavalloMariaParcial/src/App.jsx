import React, { useState } from 'react'
import Posteos from './components/Posteos'
import Estatus from './components/Estatus'
import { PrincipalContainer } from './components/styles/style'

const App = () => {

    const [countTotalLikes, setCountTotalLikes] = useState(0);

    const incrementLikes = () => {
      setCountTotalLikes(countTotalLikes + 1)
      console.log(countTotalLikes);
    }


  return (
    <PrincipalContainer>
      <div>
        <Estatus countTotalLikes={countTotalLikes}/>
      </div>
      <div>
        <Posteos incrementsLikes={incrementLikes}/>
      </div>
    </PrincipalContainer>
  )
}

export default App
