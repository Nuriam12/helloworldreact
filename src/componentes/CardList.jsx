import{ Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
export const CardList =()=>{
    const temasTeoria = [{
        title: "Contador",
        to:"useEffect"
    },
    {
        title: "Rutas Anidadas",
        to:"/rutasanidadas"
    },
    {
        title:"Imagenes",
        to:"/imagenes"
    }]
    return(
        <div className="flex flex-col gap-6">
            {temasTeoria.map((item, index)=>(
                <Link to={item.to} key ={index} className="flex group w-full bg-gray-100 text-black border-blue-950 p-4 rounded-2xl justify-between border-5 
                 hover:border-violet-950 cursor-pointer">
                    <h3 className="group-hover:text-violet-950 font-extrabold text-lg">{item.title}</h3>
                    <Icon className=" group-hover:text-violet-950 " icon="weui:arrow-filled" width="30" height="30" />
                </Link>
            ))}
        </div>
    )
}