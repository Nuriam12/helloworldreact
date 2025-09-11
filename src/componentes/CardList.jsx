import{ Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
export const CardList =()=>{
    const temasTeoria = [{
        title: "Contador",
        to:"useEffect"
    },
    {
        title: "RUTASANIDADAS",
        to:"/rutasanidadas"
    },
    {
        title:"Imagenes",
        to:"/imagenes"
    }]
    return(
        <div className="flex gap-3">
            {temasTeoria.map((item, index)=>(
                <Link to={item.to} key ={index} className="group w-full bg-gray-100 text-black border-yellow-800 p-4 rounded-2xl flex justify-between border-5 
                 hover:border-red-600 cursor-pointer">
                    <h3 className="group-hover:text-red-500 font-extrabold text-lg">{item.title}</h3>
                    <Icon className="group-hover:text-red-600" icon="weui:arrow-filled" width="15" height="24" />
                </Link>
            ))}
        </div>
    )
}