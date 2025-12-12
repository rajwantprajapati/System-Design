import About from "./Pages/About/About";
import Body from "./Pages/Home/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Pages/Team/Team";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Accordion from "./Pages/Accordion/Accordion";
import NestedComments from "./Pages/NestedComments/NestedComments";
import ImageSlider from "./Pages/ImageSlider/ImageSlider";
import Pagination from "./Pages/Pagination/Pagination";
import LiveChat from "./Pages/LiveChat/LiveChat";
import Search from "./Pages/Search/Search";
import CachedSearch from "./Pages/Search/CachedSearch";

function App() {
  return (
    <>
      <header className=" bg-black text-white p-4 flex justify-between">
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
              <a href="/live-chat">Live Chat</a>
            </li>
            <li>
              <a href="/search">Search</a>
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
          <Route path="/live-chat" element={<LiveChat />}></Route>
          {/* <Route path="/search" element={<Search />}></Route>*/}
          <Route path="/search" element={<CachedSearch />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
