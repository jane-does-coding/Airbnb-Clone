import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <h1 className="text-3xl text-sky-400 font-bold underline">
              Hello world!
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
