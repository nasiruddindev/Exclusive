import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import RooyLayout from "./layouts/RooyLayout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RooyLayout/>}>

    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/wishlist" element={<WishList />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/checkout" element={<Checkout />}></Route>
    <Route path="/productdetails/:id" element={<ProductDetailsPage />}></Route>


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
