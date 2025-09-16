import { create } from "zustand";
import { supabase } from "../supabase/supabase";
const tabla = "Tareas"
//MOSTRAR INFORMACION DE LA BASE DATOS
export const useTareasStore = create ((set)=>({
    mostrarTareas:async()=>{
        const{data,error} = await supabase.from(tabla).select();  //SELECT PARA MOSTRAR DATOS
        if (error){
            throw new Error(error.message) // mostrar error
        }
        return data;
    },
//INSERTAR DATOS    
    insertarTareas : async(p)=>{
        const{error} = await supabase.from(tabla).insert(p)
        if (error) {
            throw new Error (error.message);
        }
    },
//EDITAR TAREAS
    editarTareas: async(p) => {
        const {error} = await supabase.from(tabla).update(p).eq("id",p.id); //".eq es una condicional de zustand"
        if (error) {
            throw new Error (error.message);
        }
    },
//ELIMINAR TAREAS
    editarTareas: async() => {
        const {error} = await supabase.from(tabla).delete().eq("id",p.id);
        if (error) {
            throw new Error (error.message);
        }
    },
}));
