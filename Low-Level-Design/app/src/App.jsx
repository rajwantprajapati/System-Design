import Examples from "./Pages/Examples/Examples";
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
import AdvanceCarouselExp from "./Pages/Examples/Components/AdvanceCarouselExp";
import Draggable from "./Pages/Examples/Components/Draggable";
import StarRating from "./Pages/Examples/Components/StarRating";

function App() {
  return (
    <div className="relative">
      <header className=" bg-black text-white top-0 p-4 flex justify-between fixed z-50 w-full">
        <p className="font-bold">Wholesome Memes</p>

        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/examples">Examples</a>
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
            <Route path="/examples" element={<Examples />}>
              <Route path="carousel" element={<AdvanceCarouselExp />}></Route>
              <Route path="draggable" element={<Draggable />}></Route>
              <Route path="star-rating" element={<StarRating />}></Route>
            </Route>
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
    </div>
  );
}

export default App;
