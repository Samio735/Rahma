import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Footer from "./footer";
import MainPage from "./mainPage";
import Register from "./Register";
import List from "./List";
import { useEffect } from "react";
import RegisterError from "./RegisterError";
import Success from "./Success";

function App() {
  useEffect(() => {
    document.title = "Rahma"; // Set the desired title here
  }, []);
  return (
    <div className="app w-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="*" element={<MainPage />}></Route>
          {/* Registererror route */}
          <Route path="/error" element={<RegisterError />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
