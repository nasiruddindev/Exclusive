import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    <Route path="/" element={<Home />}></Route>

    <Route path="/about" element={<About />}></Route>

    <Route path="/contact" element={<Contact />}></Route>

    <Route path="/signup" element={<SignUp />}></Route>


    </Route>
  )
);



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
