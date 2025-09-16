import { useContadorStore } from "../../store/useContadorStore";

export const ZustandPage = () => {
    const {incrementar,contador,resetear} = useContadorStore()
    return (
        <div className="h-screen flex flex-col gap-5 bg-amber-300 text-black p-4">
            <span className="text-2xl font bold">contador:{contador}</span>
            <button onClick={incrementar} className="bg-black text-white rounder-2xl">incrementar</button>
            <button onClick={resetear} className="bg-black text-white rounder-2xl">resetear</button>
        </div>
        
    );
};