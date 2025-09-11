import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";
import { Home } from "../componentes/pages/Home";
import { Login } from "../componentes/pages/Login";
import { UseEffectPage } from "../componentes/pages/UseEffectPage";
import { ImagenesPage } from "../componentes/pages/ImagenesPage";
import { RutasAnidadasPage } from "../componentes/pages/RutasAnidadasPage";
import { PerfilPage } from "../componentes/pages/PerfilPage";
import { ConfiguracionPage } from "../componentes/pages/ConfiguracionPage";

export const MyRoutes =() => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
           
            <Route path="/useEffect" element={<UseEffectPage/>}/>  
            <Route path="/imagenes" element={<ImagenesPage/>}/>
            <Route path="/rutasanidadas" element ={<RutasAnidadasPage/>}>
            {/*ruta por defecto*/}
            <Route index element={<Navigate to="perfil/10"replace/>}/>

            <Route path="perfil/:id" element={<PerfilPage/>}/>
            <Route path="configuracion" element={<ConfiguracionPage/>}/>
            </Route>       
            <Route path="configuracion" element={<ConfiguracionPage/>}/>
        </Routes>
    </BrowserRouter>
)