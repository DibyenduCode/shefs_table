
import { useState } from "react";
import Currentcook from "../../Currentcook/Currentcook";
import Wanttocook from "../../Wanttocook/Wanttocook";

export default function Cook({ wantcook }) {
    const [currnetcook,setCurrentcook]=useState([])
    const handelcurrentcook=(item)=>{
        
        const newcurrentcook=[...currnetcook,item]
        setCurrentcook(newcurrentcook)

    }
    return (
        <div className="text-center mt-20 border rounded-lg p-6 h-[620px]">
            <div className="w-auto">
                <h1 className="text-2xl font-bold pb-6 border-b-2">Want to cook:{wantcook.length}</h1>
            </div>
            <div className="pt-6 text-center">
                <table class="table-auto w-[614px] text-left">
                    <thead>
                        <tr className="h-20">
                            <th className="text-xl">Name</th>
                            <th className="text-xl">Time</th>
                            <th className="text-xl">Calories</th>
                        </tr>
                    </thead>
                    {
                        wantcook.map(item=>(<Wanttocook item={item} handelcurrentcook={handelcurrentcook}></Wanttocook>))
                    }
                   
                </table>
            </div>

            <div className="w-auto">
                <h1 className="text-2xl font-bold pb-6 border-b-2 pt-6">Currently cooking: {currnetcook.length}</h1>
            </div>
            <div>
                <table class="table-auto w-[614px] border-collapse text-left">
                    <thead>
                        <tr>
                            <th className="text-xl">Name</th>
                            <th className="text-xl">Time</th>
                            <th className="text-xl">Calories</th>
                        </tr>
                    </thead>
                    {
                        currnetcook.map(itm=><Currentcook itm={itm}></Currentcook>)
                    }
                    <tr className="h-20">
                    <td></td>
                    <td className="text-xl">Total Time =
                        45 minutes</td>
                    <td className="text-xl">Total Calories =
                        1050 calories</td>

                </tr>
                </table>
            </div>



        </div>
    )
}