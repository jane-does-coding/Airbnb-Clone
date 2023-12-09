import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route
            path={"/test"}
            element={
              <h1 className="text-3xl text-sky-400 font-bold underline">
                test
              </h1>
            }
          />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
