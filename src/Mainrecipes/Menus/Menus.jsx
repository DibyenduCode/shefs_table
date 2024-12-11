import { useEffect, useState } from "react"
import Menu from "../Menu/Menu"


export default function Menus({ handeladdcook }) {

    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => setMenus(data))
    }
        , []);


    return (

        <div className="w-3/5">
            <div className="grid grid-cols-2 gap-6 m-20">
                {
                    menus.map(menu => <Menu menu={menu} ing={menu.ingredients} handeladdcook={handeladdcook}></Menu>)
                }
            </div>
        </div>
    )
}