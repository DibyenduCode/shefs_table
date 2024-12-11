export default Header
import { CgProfile } from "react-icons/cg";
function Header(){
    return(
        <>
        <div className="flex gap-[582px] justify-items-center items-center pt-4 pl-4">
            <div>
                <h3 className="text-2xl font-bold">Recipe Calories</h3>
            </div>
            <div>
                <li className="list-none flex gap-4">
                <ul><a href="#">Home</a></ul>
                <ul><a href="#">Recipes</a></ul>
                <ul><a href="#">About</a></ul>
                <ul><a href="#">Search</a></ul>
                </li>
            </div>
            <div className="flex">
                <input type="text" placeholder="Search" className="bg-slate-300 rounded-xl h-9 pl-3 "></input>
                <h1 className="text-4xl px-5 text-green-500"><CgProfile /></h1>
            </div>    
        </div> 
        </>
    )
}