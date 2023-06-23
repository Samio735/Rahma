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

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/List" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
