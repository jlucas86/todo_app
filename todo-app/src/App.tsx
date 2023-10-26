import { useState } from 'react'
import './App.css'

// componet imports
import TitleBar from "./componets/titleBar/titleBar";
import Login from "./componets/login/login";
import Menu from './componets/menu/menu'
import ListWrapper from './componets/list/listWrapper'

function App() {
  const [count, setCount] = useState(0)
  const [logInStyle, setLogInStyle] = useState({display:"none"})

  const test = () =>{
  
    console.log(logInStyle);
    
    setLogInStyle({display:"block"})
    
  }

  return (
    <>
      <div>
        <TitleBar buttonClick={test}></TitleBar>
        <Login logInStyle={logInStyle} setLogInStyle={setLogInStyle}></Login>
        <div className='flex'>
          <Menu></Menu>
          <ListWrapper></ListWrapper>
        </div>
        
      </div>
    </>
  )
}

export default App
