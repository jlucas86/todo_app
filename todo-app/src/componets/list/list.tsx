
//componet imports
import ListElement from "./listElement";


/**
 *  add prop that will be used to identify the list (then add id to list)
 * @returns 
 */

export default function list(){
    return(
        <div className="border-2 border-black rounded min-w-[50%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[20%] m-1 px-2 py-1">
            <div>
                <div className="flex bg-red-600">
                    <h2 className="flex-1"> title </h2>
                    <button>--</button>
                </div>
                <p> desctiption of list</p>
            </div>
            {/* loop thogh array of list then display active once */}
            <div>
                <ListElement></ListElement>
            </div>
        </div>
    )
}