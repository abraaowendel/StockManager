import { MainRoutes } from "./routers/MainRoutes";
import { Dashboard } from "./components/Dashboard";
import "./App.css";

function App() {

  return (
    <>
      <main>
        <Dashboard/>
        <MainRoutes/>
      </main>
    </>
  );
}

export default App;
