import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayOut from "./Components/Layout/MainLayOut";

function App() {
  return (
    <>
      <MainLayOut>
        <Outlet />
      </MainLayOut>
    </>
  );
}

export default App;
