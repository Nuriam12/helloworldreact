import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTareasStore } from "../../store/useTareasStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { useInsertarTareasMutation, useMostrartareasQuery } from "../../tanstack/TareasStack";

export const CrudSupabase = () => {
    const {mostrarTareas,insertarTareas} = useTareasStore() //hacemos el llamado del zustand para mostrar la informacion de la table
    const queryclient = useQueryClient()
    const {register,handleSubmit,reset,formState:{errors},} = useForm ()
    /*const {data,isLoading,error} = useQuery ({ 
        queryKey:["mostrar Tareas"],
        queryFn:mostrarTareas,
    });*/
    const {data,isLoading,error} = useMostrartareasQuery();
    /*const {mutate,isPending} = useMutation({
        mutationKey :["insertar tarea"],
        mutationFn : async (data)=>{ 
            const p = {Name:data.Name};
            await insertarTareas(p)},
            onError:(error)=>{toast.error("error:" + error.message)},//ERROR
            onSuccess:()=>{toast.success("Registro guardado correctamente")//AVISO DE CAMBIO EXITOSO
                reset()
                queryclient.invalidateQueries(["mostrar Tareas"])//REFRESCAR LA PAGINA PARA QUE MUESTRE CAMBIOS
            }
    });*/
    const {mutate,isPending} = useInsertarTareasMutation(reset);
    if(isLoading){
        return(
        <span>...cargando</span>)
    };
    if(error){
        return(
        <span>error...{error.message}</span>)
    }
    return (
        <main className="min-h-screen bg-amber-400 flex items-center justify-center p-4">
            <Toaster position="top-right richColors"/>
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-black mb-4">
                    Tareas - Supabase + REACT
                </h1>
                <form onSubmit={handleSubmit(mutate)} className="flex gap-2 mb-4">
                    <input {...register("Name",{required:"la tarea es obligatoria"})} type="text" className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400" placeholder="escribe una tarea"/>
                    {errors.Name && (<p className="text-red-500 text-sm mb-2">{errors.Name.message}{""}</p>)} 
                    {isPending ? (<span>guardando...</span>):(
                    <button className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer">Agregar</button>)}
                </form>
                <ul className="flex flex-col font-bold">
                {data?.map((item,index)=>{
                return (
                    <li className="flex justify-between items-center p-3 bg-amber-100 rounded shadow-sm" key={index}>
                        <span className={`cursor-pointer flex-1 ${item.State ? "line-through text-gray-400":""}`}>{item.Name} </span>
                        <Icon icon="mynaui:trash-solid" width="24" height="24 " className="cursor-pointer" /> 
                    </li>);     
                })}
                </ul>
            </div>
        </main>
    );
};