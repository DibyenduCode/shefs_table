import { useState } from "react"
import Cook from "./Cook/Cook"
import Menus from "./Menus/Menus"

export default function Mainrecipes(){
    const [wantcook,setwantCook]=useState([]);

    const handeladdcook=cook=>{
        
        const newwantcook=[...wantcook,cook];
        setwantCook(newwantcook);

    }
    return(
        <>
        <div className="flex">
        <Menus handeladdcook={handeladdcook}></Menus>
        <Cook wantcook={wantcook}></Cook>
        </div>
        </>
    )
}