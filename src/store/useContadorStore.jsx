import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useContadorStore = create (
   persist(
        (set)=>({  //set va a modificar el estado
    contador:0,
    incrementar:()=>set((state)=>({contador:state.contador+1})), //aqui set modifica al estado contador (incrementar usa el estado previo) 
    resetear:()=>set({contador:0}) // aqui el set modifica el estado , reiniciandolo a 0
}),{
    name:"contador-store"
})
);

//persist nos permite mantener la informacion 