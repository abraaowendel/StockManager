import { useRoutes } from "react-router-dom";
import Home from "../pages/NotFound";
import Produtos from "../pages/Produtos";
import Estoque from "../pages/Estoque";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Fornecedores from "../pages/Fornecedores";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home/> },
    { path: "/entrar", element: <Login /> },
    { path: "/mercadorias", element: <Produtos /> },
    { path: "/estoque", element: <Estoque /> },
    { path: "/fornecedores", element: <Fornecedores/> },
    { path: "*", element: <NotFound /> },
  ]);
};
