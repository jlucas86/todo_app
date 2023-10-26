
//componet imports

export default function titleBar(props:{buttonClick:any}){


    return(
        <div className="bg-purple-500 border-black border-2 rounded w-screen">
            <div className='flex'>
                <h1 className='flex-1 ml-[50vw]'>title</h1>
                <button onClick={props.buttonClick}>logIn</button>
            </div>
            
        </div>
    )
}