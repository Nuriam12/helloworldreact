import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTareasStore } from "../store/useTareasStore";
import { toast } from "sonner";

export const useMostrartareasQuery = () => { 
    const {mostrarTareas} = useTareasStore();
    return useQuery ({ 
        queryKey:["mostrar Tareas"],
        queryFn:mostrarTareas,
    });
};
export const useBuscarTareasQuery = () => { 
    const {buscarTareas,buscador} = useTareasStore();
    return useQuery ({ 
        queryKey:["buscar Tareas",{Name:buscador}],
        queryFn:()=>buscarTareas({Name:buscador}),
    });
};
export const useInsertarTareasMutation = (reset) => { //CON ESTA FUNCION INSERTAMOS DATOS EN LA DB 
    const queryclient = useQueryClient ()
    const {insertarTareas,setStateModal} = useTareasStore()
    return  useMutation({
        mutationKey :["insertar tarea"],
        mutationFn : async (data)=>{ 
            const p = {Name:data.Name};
            await insertarTareas(p)},
            onError:(error)=>{toast.error("error:" + error.message)},//ERROR
            onSuccess:()=>{toast.success("Registro guardado correctamente");//AVISO DE CAMBIO EXITOSO
                reset();
                setStateModal(false)
                queryclient.invalidateQueries(["mostrar Tareas"])//REFRESCAR LA PAGINA PARA QUE MUESTRE CAMBIOS
            }
    });
};
export const useEliminarTareasMutation = () => {
    const {eliminarTareas,itemSelect} = useTareasStore()
    const queryclient = useQueryClient()
    return useMutation ({
        mutationKey:["eliminar tarea"],
        mutationFn:async()=>{
            const p ={id:itemSelect?.id};
            await eliminarTareas(p);
        },
        onError :(error)=>{
            toast.error("Error:"+error.message)
        },
        onSuccess:()=>{
            queryclient.invalidateQueries(["mostrar tareas"])
            toast.success("tarea eliminada")
        }
    })
};
export const useEditarTareasMutation = () => {
    const {editarTareas,itemSelect} = useTareasStore();
    const queryclient = useQueryClient ();
    return useMutation ({
        mutationKey:["editar tarea"],
        mutationFn: async (data) => {
            const p = {id: itemSelect?.id,
                        Name: data.Name};
            await editarTareas(p);
        },
        onerror:(error)=> {
            toast.error("Error:"+error.message)
        },
        onSuccess:()=> {
            toast.success("tarea modificada")
            setStateModal(false)
            queryclient.invalidateQueries(["mostrar Tareas"]);
        },
    });
};
export const useEditarStateTareasMutation = () => {
    const {editarTareas,itemSelect} = useTareasStore();
    const queryclient = useQueryClient ();
    return useMutation ({
        mutationKey:["editar tarea"],
        mutationFn: async () => {
            const p = {id:itemSelect?.id,
                        State:!itemSelect?.State,};
            await editarTareas(p);
        },
        onerror:(error)=> {
            toast.error("Error:"+error.message)
        },
        onSuccess:()=> {
            toast.success("tarea modificada")
            queryclient.invalidateQueries(["mostrar Tareas"]);
        },
    });
};