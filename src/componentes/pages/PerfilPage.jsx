import { useParams } from "react-router-dom"
export const PerfilPage =()=>{
    const {id}= useParams() //hook para capturar parametros de la url
    return(
        <div className="h-screen bg-amber-300 text-black">
            <span>PerfilPage id usuarios : {id}</span>
        </div>
    )
}