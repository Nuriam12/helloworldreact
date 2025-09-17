import { create } from "zustand";
import { supabase } from "../supabase/supabase";
const tabla = "Tareas"
//MOSTRAR INFORMACION DE LA BASE DATOS
export const useTareasStore = create ((set)=>({
    accion:"",
    setAccion:(p) => {
        set({accion:p});
    },

    stateModal:false,
    setStateModal :(p)=>{
    set({stateModal:p});},

    itemSelect:null,
    setItemSelect:(p)=>set({itemSelect:p}),
//MOSTRAR DATOS    
    mostrarTareas:async()=>{
        const{data,error} = await supabase.from(tabla).select();  //SELECT PARA MOSTRAR DATOS
        if (error){
            throw new Error(error.message) // mostrar error
        }
        return data;
    },
//BUSCAR TAREAS
    buscador:"",
    setBuscador: (p) => set({buscador:p}),

    buscarTareas:async(p)=>{
        const{data,error} = await supabase.from(tabla).select()
        .ilike("Name","%"+p.Name+"%").order("Name",{ascending:true});  //SELECT PARA MOSTRAR DATOS
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
    eliminarTareas: async(p) => {
        const {error} = await supabase.from(tabla).delete().eq("id",p.id);
        if (error) {
            throw new Error (error.message);
        }
    },
}));
