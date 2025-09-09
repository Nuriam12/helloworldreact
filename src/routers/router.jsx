import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { Login } from "../../pages/Login";
import { Page404 } from "../../pages/404";

export const MyRoutes =() => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
)