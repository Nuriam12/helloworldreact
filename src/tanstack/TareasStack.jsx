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
export const useInsertarTareasMutation = (reset) => {
    const queryclient = useQueryClient ()
    const {insertarTareas} = useTareasStore()
    return  useMutation({
        mutationKey :["insertar tarea"],
        mutationFn : async (data)=>{ 
            const p = {Name:data.Name};
            await insertarTareas(p)},
            onError:(error)=>{toast.error("error:" + error.message)},//ERROR
            onSuccess:()=>{toast.success("Registro guardado correctamente")//AVISO DE CAMBIO EXITOSO
                reset()
                queryclient.invalidateQueries(["mostrar Tareas"])//REFRESCAR LA PAGINA PARA QUE MUESTRE CAMBIOS
            }
    });
}