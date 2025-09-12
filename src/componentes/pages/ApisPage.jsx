import { useEffect,useState } from "react";
import { data } from "react-router-dom";

export const ApisPage = () => {
 const [pokemons, setPokemos] = useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")




        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then((res)=>res.json())
        .then((data) => {setPokemos(data.results);
            console.log("data",data.results);})
    },[]);
    return (
      <div className="h-screen bg-amber-300 text-black">
        <span>pokemons</span>
        <section className="flex flex-col">{
            pokemons.map((item,index)=>{
                return(
                    <span>
                        {item.name}
                    </span>
                )
            })
        }</section>
        
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