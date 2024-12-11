export default function Wanttocook({item,handelcurrentcook}) {

    return (
        <>
            <tbody>
                <tr className="bg-gray-50 h-20">

                    <td className="text-xl">{item.recipe_name}</td>
                    <td className="text-xl">{item.preparing_time}</td>
                    <td className="text-xl">{item.calories}</td>
                    <td>
                        <button onClick={()=>handelcurrentcook(item)} className="bg-green-400 text-black h-10 w-36 rounded-full font-bold">
                            Preparing
                        </button></td>
                </tr>
                
            </tbody>
        </>
    )
}