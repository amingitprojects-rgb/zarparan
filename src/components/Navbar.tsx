import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { ShoppingCart, User } from "lucide-react";

const navLinks = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "محصولات",
    href: "/products",
  },

  {
    title: "بلاگ",
    href: "/blog",
  },

  {
    title: "استان ها",
    href: "/provinces",
  },
];

function Navbar() {
  const location = useLocation();

  return (
    <div className="h-20 bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link to="/">
          <div className="text-2xl tracking-wide">Zarparan</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex justify-between items-center h-full">
        {/* RIGHT */}
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">Zarparan</div>
          </Link>
          <ul className="hidden md:flex gap-4">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`${
                  location.pathname === item.href ? "text-yellow-600" : ""
                }`}
              >
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User />
            <Link to="/login">ورود</Link> /<Link to="/register">ثبت نام</Link>
          </div>

          <div className="p-2 rounded-full bg-purple-700">
            <Link to="/cart">
              <ShoppingCart className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
