import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";
import { Home } from "../componentes/pages/Home";
import { UseEffectPage } from "../componentes/pages/UseEffectPage";
import { ImagenesPage } from "../componentes/pages/ImagenesPage";
import { RutasAnidadasPage } from "../componentes/pages/RutasAnidadasPage";
import { PerfilPage } from "../componentes/pages/PerfilPage";
import { ConfiguracionPage } from "../componentes/pages/ConfiguracionPage";
/*import { LayoutMain } from "../componentes/Layouts/LayoutMain"; LAYOUT PERSISTENTE*/
import { RelojPage } from "../componentes/pages/RelojPage";
import { ApisPage } from "../componentes/pages/ApisPage";
import { FormulariosPage } from "../componentes/pages/FormulariosPage";

export const MyRoutes =() => (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/relojpage" element={<RelojPage />} />
                <Route path="/useEffect" element={<UseEffectPage/>}/>  
                <Route path="/imagenes" element={<ImagenesPage/>}/>
                <Route path="/apis" element={<ApisPage/>}/>
                <Route path="/rutasanidadas" element ={<RutasAnidadasPage/>}>
                {/*ruta por defecto*/}
                <Route index element={<Navigate to="perfil/id"replace/>}/>
                <Route path="perfil/:id" element={<PerfilPage/>}/>
                <Route path="configuracion" element={<ConfiguracionPage/>}/>
                </Route>       
                <Route path="configuracion" element={<ConfiguracionPage/>}/>
                <Route path="formularios" element={<FormulariosPage/>}></Route>
        </Routes>
    </BrowserRouter>
)