import { useState } from "react";
import { Modal } from "./modal.jsx";
export const Contador = () => {
  const [state, setState] = useState(false);
  return (
    <div className="bg-amber-400 p-4 rounded-2xl">
      <h1 className="bg-amber-700 p-3 rounded-2xl">Contador</h1>
      <button className="bg-black p-1 text-amber-50" onClick={() => setState(!state)}>{state ? "ocultar" : "ver"}</button>
      {state && <Modal />}
    </div>
  );
}