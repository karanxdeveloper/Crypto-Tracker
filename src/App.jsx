

// import { useState } from 'react'
import './App.css'
import Routing from './Components/Routing/Routing'
import Home from './pages/Home'
// import { CurrencyContext } from './Context/CurrencyContext' => **THIS IS A WAY FOR USING CONTEXT OF REACT FOR STATE MMANAGEMENT BUT USING ZUSTAND WE CAN MAKE THING MORE EASY FOR US

function App() {

  // const [currency, setCurrency] = useState("usd")

  return (
    <>
    {/* <CurrencyContext.Provider value={{currency,setCurrency}}>  */}

    
    <Routing/>
 

    {/* </CurrencyContext.Provider> */}
    </>
  )
}

export default App
