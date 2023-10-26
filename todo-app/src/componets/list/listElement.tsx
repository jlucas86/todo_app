

export default function listElement(){
    return(
        <div className="bg-green-500">
            <h3> list elementn title </h3>
            <p> desctiption of list element</p>
            <div>
                <div className="flex bg-purple-700">
                    <h3 className="flex-1">sublist title</h3>
                    <button>--</button>
                </div>
            </div>
        </div>
    )
}