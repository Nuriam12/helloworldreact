import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { useEditarTareasMutation, useInsertarTareasMutation } from "../../tanstack/TareasStack";
import { useTareasStore } from "../../store/useTareasStore";

export const Modal = () => {
    const {stateModal,setStateModal,accion,itemSelect
    } = useTareasStore()
    const {register,handleSubmit,reset,formState:{errors},} = useForm ({defaultValues:{
        Name:itemSelect?.Name
    }});
    const {mutate:mutateInsertar,isPending} = useInsertarTareasMutation(reset);
    const {mutate:mutateEditar,isPending:charge}= useEditarTareasMutation();
    
  
    
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md">
            <section className="flex justify-between mb-4 ">
                <span className="font-bold text-2xl">{accion=="Nuevo" ? "Nueva":"Editar"} Tarea</span>
                <Icon onClick={()=>{ 
                    setStateModal(false);
                    reset();}} 
                    className="cursor-pointer" icon="zondicons:close-solid" width="20" height="20" />
            </section> 
            <form onSubmit={handleSubmit(accion==="Nuevo"?mutateInsertar:mutateEditar)} className="flex flex-col gap-4">
                <input {...register("Name",{required:"la tarea es obligatoria"})} type="text" className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400" placeholder="escribe una tarea"/>
                {errors.Name && (<p className="text-red-500 text-sm mb-2">{errors.Name.message}{""}</p>)} 
                <div className="mx-auto">
                {isPending ? (<span>guardando...</span>):(
                <button className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer">Agregar</button>)}                </div>
            </form>
            </div>
        </div>
    );
};