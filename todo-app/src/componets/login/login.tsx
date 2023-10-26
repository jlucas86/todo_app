
//componet imports

import { useEffect, useState } from "react"

export default function login(props:{logInStyle:any, setLogInStyle:any}){

    

    const test = () =>{
        props.setLogInStyle({dispaly:"none"})
        console.log(props.logInStyle);
        
    }

    return(
        <div  >
            {/* <div className='flex'>
                <h1 className='flex-1 ml-[50vw]'>title</h1>
                <button>logIn</button>
            </div> */}
            <div className="bg-red-500 border-black border-2 rounded w-96 z-20 text-center relative" style={props.logInStyle}>
                <h1>Log In</h1>
                <p>notes</p>
                <input type="textbox" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <button className="mb-2">log in</button>
                <button className="">Create Account?</button>

                <button className=" absolute top-0 right-0" onClick={test}>X</button>
            </div>
            
            <div className="bg-green-500 border-black border-2 rounded w-96 z-20 text-center relative">
            {/* <div className='flex'>
                <h1 className='flex-1 ml-[50vw]'>title</h1>
                <button>logIn</button>
            </div> */}
                <h1>create Account</h1>
                <p>notes</p>
                <input type="textbox" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <input type="password" placeholder="Conferm password"></input>
                <br></br>
                <button className="mb-2"> Create Account</button>
                <button className="">login?</button>

                <button className=" absolute top-0 right-0">X</button>

            
            
            
            </div>
            
        </div>
    )
}