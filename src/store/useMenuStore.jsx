import {create} from "zustand" ;
export const useMenuStore = create((set)=>({ //set aplica el cambio al estado
    itemselect:null, //el item que sera modificado 
    setItemselect:(p)=>set({itemselect:p}),// la modificacion que se realiza al item
}));
//utilizaremos itemselect al rededor de otros componentes
