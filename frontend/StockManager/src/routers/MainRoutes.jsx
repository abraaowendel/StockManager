import { useRoutes } from "react-router-dom";
import Produtos from "../pages/Produtos";
import Estoque from "../pages/Estoque";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/mercadorias", element: <Produtos /> },
    { path: "/estoque", element: <Estoque /> },
    { path: "/entrar", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);
};
