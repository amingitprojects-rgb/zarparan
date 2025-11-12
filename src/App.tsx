import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Provinces from "./pages/Provinces";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/provinces" element={<Provinces />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
