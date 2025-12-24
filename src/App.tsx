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
import NewAdPage from "./components/user-panel/new-ad/NewAdPage";
import MyAdsPage from "./components/user-panel/MyAdsPage";
import MyChats from "./components/user-panel/MyChats";



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
          <Route path="my-ads" element={<MyAdsPage />} />
          <Route path="wallet" element={<WalletPanel />} />
          <Route path="new-ad" element={<NewAdPage />} />
          <Route path="chats" element={<MyChats />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
