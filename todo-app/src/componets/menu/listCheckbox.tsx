
import { useState } from "react"


/**
 * add id to desripton so the style can be change to allow it to be copased
 * @returns 
 */



export default function listCheckbox(){

    const [active, setActive] = useState(false)

    // hide/unhide description of list
    const handleButtonClick = () =>{
        
    }

    // update state and context array as to if the list is active or not
    const handleCheckboxChange = () =>{
        
        if(active){
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return(
        <div className=" border-black border-2 rounded  mx-2 my-1 bg-red-600">
            <div className="flex w-full bg-purple-600">
                <input type="checkbox" onChange={handleCheckboxChange} checked={active}></input>
                <label className="w-full">
                    <div className="flex w-full bg-green-600">
                        <div className="flex-1">
                            <h2 >List title</h2>
                        </div>
                        <div>
                            
                            <button onClick={handleButtonClick}> --</button>
                        </div>
                        
                    </div>
                    
                    
                </label>
            </div>

            <p>description</p>
            
            
        </div>
    )
}