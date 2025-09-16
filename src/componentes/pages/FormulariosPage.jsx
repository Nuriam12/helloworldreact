import { useForm } from "react-hook-form";
import { useMenuStore } from "../../store/useMenuStore";
//FORMULARIOS//
export const FormulariosPage = () => {
    const{itemselect}=useMenuStore(); //llamado al zustand
    const {register,handleSubmit,formState:{errors},watch,reset} = useForm();
    /*explicaciones del hook
    Register : recopila la informacion
    handlesubmit : verifica la informacion que recopila register y hace el envio mediante la onSubmit
    watch : permite mostrar como la informacion se modifica en tiempo real en el formulario
    reset : eliminar toda la informacion que no se envio
    */
    const enviar = (data) => {
        console.log(data) // mostramos la informacion 
    };
    console.log(itemselect) 
    return (
        <main className="h-screen bg-white text-black flex flex-col">
            <h1>FormulariosPages {watch("nombre")}</h1> 
            {itemselect?.title} 
            {itemselect?.to}
            <form onSubmit={handleSubmit(enviar)}className="border p-2 flex flex-col gap-4">
                <section className="bg-amber-200">
                  <h1>VALIDAR NOMBRE</h1>                
                    <input {...register("nombre",{required:"el nombre es obligatorio",minLength:{value:3,message:"debe tener al menos 3 caracteres"}})} className="p-2 border" placeholder="introduce nombre"/>
                    <p>{errors.nombre?.message}</p>
                </section>
                <section className="bg-amber-200">
                  <h1>VALIDAR CORREO</h1>                
                    <input {...register("email",{required:"el correo es obligatorio",pattern:{value:/^[^@]+@[^@]+\.[^@]+$/,message:"correo invalido"}})} className="p-2 border" placeholder="introduce correo"/>
                    <p>{errors.email?.message}</p>
                </section>
                <section className="bg-amber-200">
                    <h1>VALIDAR NUMEROS</h1>
                    <input type="number"{...register("edad",{required:"la edad es obligatoria",valueAsNumber:true,min:{value:18,message:"debes ser mayor de 18 años"},max:{value:99,message:"edad maxima permitida 99"},})}
                    placeholder="Ej:27"/>
                    <p>{errors.edad?.message}</p>
                </section>
                <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-amber-600">Enviar</button>
            </form>
                 <button onClick={()=>reset()} className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-amber-600">RESET</button>

        </main>

    );
};











/*/FORMULARIO PARA VALIDAR ERRORES DE TEXTO/
export const FormulariosPage = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const enviar = (data) => {
        console.log(data)
        //alert(data.nombre)
    };
    return (
        <main className="h-screen bg-amber-300 text-black flex flex-col">
            <h1>FormulariosPage</h1>
            <form onSubmit={handleSubmit(enviar)}>                
                <input {
                    ...register("nombre",{required:"el nombre es obligatorio",minLength:{value:3,message:"debe tener al menos 3 caracteres"}})
                } className="p-2 border" placeholder="nombre"/>
                <p>{errors.nombre?.message}</p>
                <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-amber-600">Enviar</button>
            </form>
            
        </main>

    );
}; */