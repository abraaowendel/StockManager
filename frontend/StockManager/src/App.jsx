import "./main.css";
import { MainRoutes } from "./routers/MainRoutes";
import { Header } from "./components/Header";

function App() {

  return (
    <>
      <Header/>
      <MainRoutes />
    </>
  );
}

export default App;
