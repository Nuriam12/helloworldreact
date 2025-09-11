import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../componentes/pages/Home";
import { Login } from "../componentes/pages/Login";
import { Page404 } from "../componentes/pages/404";
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
            <Route path="perfil" element={<PerfilPage/>}/>
            <Route path="configuracion" element={<ConfiguracionPage/>}/>
            </Route>       
            <Route path="configuracion" element={<ConfiguracionPage/>}/>
        </Routes>
    </BrowserRouter>
)