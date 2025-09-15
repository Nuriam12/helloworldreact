import {create} from "zustand" ;
export const useMenuStore = () => create((set)=>({
    itemselect:null,
    setItemselect:(p)=>set({itemselect:p})
    
}))