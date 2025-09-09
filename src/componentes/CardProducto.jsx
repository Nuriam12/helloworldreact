export const CardProducto =({item})=>(
    <div className ="text-white bg-gray-800 border p-4 m-2">
        <h3>{item.nombre}</h3>
        <p>Precio: {item.precio}</p>
        {item.disponibilidad ? "disponible" : "no disponible"}
    </div>
)