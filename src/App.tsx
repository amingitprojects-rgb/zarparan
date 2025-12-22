import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Provinces from "./pages/Provinces";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import UserPanelLayout from "./pages/UserPanel";
import UserDashboard from "./components/user-panel/UserDashboard";
import WalletPanel from "./components/user-panel/WalletPanel";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/provinces" element={<Provinces />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

        {/* USER PANEL */}
        <Route path="/user-panel" element={<UserPanelLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="wallet" element={<WalletPanel />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
