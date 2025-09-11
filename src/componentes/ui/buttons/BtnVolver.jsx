import { Icon } from "@iconify/react/dist/iconify.js"
import { useNavigate } from "react-router-dom"
export const BtnVolver  = ()=> {
    const navigate = useNavigate()
    return (
        <button onClick ={()=>navigate("/")} className="absolute top-15 left-15 hover:bg-amber-700 hover:text-white rounded-full p-2 p-left">
            <Icon className="justify-center" icon="streamline-block:control-buttons-rewind" width="36" height="36" />
        </button>
    )
}