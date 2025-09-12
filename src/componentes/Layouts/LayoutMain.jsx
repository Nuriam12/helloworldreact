import { Outlet } from "react-router-dom";
import { CardList } from "../CardList";
export const LayoutMain = () => {
    return (
        <div className="flex h-screen bg-amber-300 text-black">
            <header>
                <CardList/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

/*esto son los layouts (navegador permanente) queda guardado como recurso para estudio*/