import About from "./Components/About";
import Body from "./Components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <header className=" bg-black text-white mb-4 p-4 flex justify-between">
        <p className="font-bold">Wholesome Memes</p>

        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />}></Route>
          </Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
