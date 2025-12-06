import About from "./Pages/About";
import Body from "./Pages/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Pages/Team";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Accordion from "./Pages/Accordion";
import NestedComments from "./Pages/NestedComments";
import ImageSlider from "./Pages/ImageSlider";
import Pagination from "./Pages/Pagination";

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
              <a href="/accordion">Accordion</a>
            </li>
            <li>
              <a href="/nested-comments">Nested Comments</a>
            </li>
            <li>
              <a href="/image-slider">Image Slider</a>
            </li>
            <li>
              <a href="/pagination">Pagination</a>
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
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/nested-comments" element={<NestedComments />}></Route>
          <Route path="/image-slider" element={<ImageSlider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
