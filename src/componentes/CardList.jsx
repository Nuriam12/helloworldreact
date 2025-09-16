import{ Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useMenuStore } from '../store/useMenuStore';
export const CardList =()=>{
    const {setItemselect} = useMenuStore()
    //aqui van todos los cuadros que se muestran en la pantalla//
    const urlImage="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2014/01/13flex_ronnie-coleman_most-muscular_inset.jpg?quality=40&strip=all"
    const temasTeoria = [{
        title: "Contador",
        to:"useEffect"
    },
    {
        title:"CRUD SUPABASE",
        to:"/crudsupabase"
    },
    {
        title: "Rutas Anidadas",
        to:"/rutasanidadas"
    },
    {
        title:"Imagenes",
        to:"/imagenes?src=${}"
    },
    {
        title:"hora",
        to:"/relojpage"
    },
    {
        title:"Apis",
        to:"/apis"
    },
    {
        title:"Formularios",
        to:"/formularios"
    },
    {
        title:"Zustand",
        to:"/zustand"
    }

    ]
    return(
        <div className="flex flex-col gap-6">
            {temasTeoria.map((item, index)=>(
                <Link onClick={()=> setItemselect(item)}
                to={item.to} key ={index} className="flex group w-full bg-gray-100 text-black border-blue-950 p-4 rounded-2xl justify-between border-5 
                 hover:border-violet-950 cursor-pointer">
                    <h3 className="group-hover:text-violet-950 font-extrabold text-lg">{item.title}</h3>
                    <Icon className=" group-hover:text-violet-950 " icon="weui:arrow-filled" width="30" height="30" />
                </Link>
            ))}
        </div>
    )
}