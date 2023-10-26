
//componet imports
import ListCheckbox from "./listCheckbox";

export default function menu(){
    return(
        <div className="bg-blue-500 border-black border-2 rounded w-64">
            <h2>Menu</h2>
            <div className="w-auto mx-2 my-1">
                <button className=" w-full border-black border-2 rounded flex items-center justify-center font-semibold"> 
                    <div className="mr-2 font-extrabold">+</div>
                    <h3>Create new List</h3>
                </button>
            </div>
            
            {/* go through array of lists then display them using ListCheckbox */}
            <ListCheckbox></ListCheckbox>
            <ListCheckbox></ListCheckbox>
            <ListCheckbox></ListCheckbox>
            
        </div>
    )
}