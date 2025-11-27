import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import ProvincesDropdown from "./ProvincesDropdown";

const navLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "بلاگ", href: "/blog" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: Event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="h-20 w-full bg-white relative">
      {/* MOBILE */}
      <div className="h-full px-8 flex items-center justify-between md:hidden">
        <Link to="/">
          <div className="text-2xl tracking-wide">Zarparan</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <nav className="hidden px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  md:flex justify-between items-center h-full w-full shadow-md border-b border-b-gray-300">
        {/* RIGHT */}
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">Zarparan</div>
          </Link>

          <ul className="hidden md:flex gap-6 items-center">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  location.pathname === item.href
                    ? "text-yellow-600"
                    : "text-gray-700"
                }`}
              >
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}

            {/* PROVINCES DROPDOWN */}
            <li ref={wrapperRef} className="relative">
              <div
                role="button"
                tabIndex={0}
                aria-expanded={open}
                aria-haspopup="menu"
                onClick={() => setOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen((v) => !v);
                  } else if (e.key === "Escape") {
                    setOpen(false);
                  }
                }}
                className="flex items-center gap-1 cursor-pointer select-none text-gray-700 hover:text-yellow-600"
              >
                استان‌ها
                <ChevronDown size={16} />
              </div>

              {open && <ProvincesDropdown />}
            </li>
          </ul>
        </div>

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-700">
            <Link to="user-panel" className="ml-2">
              <User />
            </Link>
            <Link to="/login" className="hover:text-yellow-600">
              ورود
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/register" className="hover:text-yellow-600">
              ثبت نام
            </Link>
          </div>

          {/* CART WITH BADGE */}
          <div className="relative">
            <Link to="/cart" aria-label="سبد خرید">
              <div className="p-3 bg-primary rounded-full relative">
                <ShoppingCart className="text-white w-5 h-5" />

                {/* BADGE */}
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow">
                  0
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
