import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";



export default function Menu({ menu, ing, handeladdcook }) {


    return (

        <div className="border-2 p-6 rounded-lg">
            <div className="pb-6">
                <img
                    src={menu.recipe_image}
                    alt=""
                    className="w-full h-60 rounded-lg"
                />
            </div>
            <div>
                <h1 className="text-xl pb-5">{menu.recipe_name}</h1>
                <p className="text-base leading-8 border-b-2 pb-4">{menu.short_description
                }</p>
                <h2 className="pt-4">Ingredients: {menu.ingredients.length}</h2>
                <ul className="pt-4 leading-6 border-b-2 pb-4">

                    {ing.map(ing => (
                        <li className="text-sm text-gray-700">
                            {ing}
                        </li>
                    ))}

                </ul>
            </div>
            <div className="flex pt-6 gap-4">
                <span>
                    <CiClock2 />
                </span>
                <span>{menu.preparing_time}</span>
                <span>
                    <FaFire />
                </span>
                <span>{menu.calories}
                </span>
            </div>
            <div className="pt-4">
                <button className="bg-green-400 text-black h-10 w-36 rounded-full font-bold" onClick={() => handeladdcook(menu)}>
                    Want to Cook
                </button>
            </div>
        </div>


    )
}

