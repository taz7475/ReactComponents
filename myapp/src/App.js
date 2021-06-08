import React from 'react'
import "./App.css";
import FullName from './Components/Profil/FullName'
import Address from './Components/Profil/Address'
import ProfilePhoto from './Components/Profil/ProfilPhoto'
const App = () => {
  return (
    <div>
      <FullName/>
      <Address/>
      <ProfilePhoto/>
    </div>
  )
}

export default App
