import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTareasStore } from "../../store/useTareasStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { useBuscarTareasQuery, useEditarStateTareasMutation, useEditarTareasMutation, useEliminarTareasMutation, useInsertarTareasMutation, useMostrartareasQuery } from "../../tanstack/TareasStack";
import { Modal } from "./Modal";
export const CrudSupabase = () => {
    const {setItemSelect,stateModal,setStateModal,setAccion,setBuscador} = useTareasStore() //hacemos el llamado del zustand para mostrar la informacion de la table
    const queryclient = useQueryClient()
    const {register,handleSubmit,reset,formState:{errors},} = useForm () 
    /*FUNCION DE ZUSTAND
    const {data,isLoading,error} = useQuery ({ 
        queryKey:["mostrar Tareas"],
        queryFn:mostrarTareas,
    });*/
    const {data,isLoading,error} = useMostrartareasQuery();// hacemos el llamado del hook oara mostrar info REEMPLAZANDO A LA FUNCION DE ZUSTAND
    /*FUNCION DE ZUSTAND
    const {mutate,isPending} = useMutation({
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
    const {mutate,isPending} = useInsertarTareasMutation(reset); // hacemos el llamado del hook para insertar REEMPLAZANDO A LA FUNCION DE ZUSTAND
    const {mutate:mutateEliminar,isPending:cargando} = useEliminarTareasMutation();//hacemos el llamado del hook para eliminar un elemento de la tabla
    const {mutate:mutateEditar,isPending:charge}= useEditarStateTareasMutation();
    const {data:databuscador,isLoading:isLoadingBuscador,} = useBuscarTareasQuery()


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
            {
                stateModal && <Modal/>
            }
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-black mb-4">
                    Tareas - Supabase + REACT
                </h1>
                <div className="flex gap-2 mb-4">
                    <input onChange={(e) => setBuscador(e.target.value)} type="search" className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400" placeholder="escribe una tarea"/>
                    <button onClick={()=>{setStateModal(true),setAccion("Nuevo"),setItemSelect(null)}} className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer">Agregar</button>
                </div>
                <ul className="flex flex-col font-bold">
                {databuscador?.map((item,index)=>{
                return (
                    <li className="flex justify-between items-center p-3 bg-amber-100 rounded shadow-sm" key={index}>
                        <span onClick={()=>{setItemSelect(item);mutateEditar();}} className={`cursor-pointer flex-1 ${item.State ? "line-through text-gray-400":""}`}>{item.Name} </span>
                        <section className="flex gap-2 items-center">
                             <Icon className="cursor-pointer" icon="tabler:edit" width="24" height="24" onClick={()=>{
                                setItemSelect(item) /*mostrara el nombre de la tarea a modificar */
                                setAccion("editar") /*mostrara en la pantalla que editara la tarea */
                                setStateModal(true) /*modificar si la tarea esta en true o false */
                             }} />
                             <Icon onClick={()=>{setItemSelect(item);mutateEliminar()}} icon="mynaui:trash-solid" width="24" height="24 " className="cursor-pointer" />
                            
                        </section>
                    
                    </li>);     
                })}
                </ul>
            </div>
        </main>
    );
};