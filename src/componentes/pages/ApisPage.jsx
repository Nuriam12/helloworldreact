import { useQuery } from "@tanstack/react-query";
import  axios  from "axios";
import { useEffect,useState } from "react";


export const ApisPage = () => {
 //const [pokemons, setPokemos] = useState([])
 //const [cargando, setCargando] = useState (true)
 const [visible,setVisible] = useState(false)
 const {data, isLoading,error,refetch} = useQuery ({
    queryKey:["consulta a pokeapi"],
    queryFn:async()=>{const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        return res.data.results;
    },
    refetchOnWindowFocus:false,
    enabled:false
 });
 //state para modificar el button y la informacion que mostramos en pantalla//
 const mostrar = async () => {
    if (!visible && !data) {
        await refetch();
    }
    setVisible((prev) => !prev);
 }
if (isLoading) return <span>cargando...</span>;
if (error) return <span>error...{error.message}</span>

    return (
      <div className="h-screen bg-amber-300 text-black gap-5 ">
        <span className="bg-white ">pokemons</span>
        <button className="bg-red-500 m-4" onClick={mostrar}>{visible ? "mostrar pokemons":"ocultar pokemons"}</button>
        {visible &&(
        <section className="flex flex-col ">{
            data?.map((item,index)=>{
                return(
                    <span key={index}> 
                        {item.name}
                    </span>
                )
            })
        }</section>
    )}
      </div>
    );
};
/*CONSULTAS INDIVIDUALES*/
/*<div className="h-screen bg-amber-300 text-black">
            <span>pokemon</span>
            {
                pokemons?.abilities?.length > 0 && (
            <span>
                ability : {pokemons.abilities[0].ability.name}
            </span>
            )}
            <span>Estadisticas</span>
            {
                pokemons?.stats?.length > 0 && (
                    <span>
                        estadistica : {pokemons.stats[4].stat.name}
                    </span>
                )
            }
        </div>*/

//useEffect(()=>{
//        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//        .then((res)=>res.json())
//        .then((data) => {setPokemos(data.results);
//            console.log("data",data.results);})
//    },[]);            