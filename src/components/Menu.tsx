import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "بلاگ", href: "/blog" },
  { title: "استان‌ها", href: "/provinces" },
  { title: "ورود", href: "/login" },
  { title: "پنل کاربری", href: "/user-panel" },
  { title: "سبد خرید(1)", href: "/cart" },
];

function Menu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Toggle Icon */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {open ? (
          <X width={28} height={28} />
        ) : (
          <MenuIcon width={28} height={28} />
        )}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed left-0 top-20 w-full
          h-[calc(100vh-80px)]
          bg-white/30 backdrop-blur-md z-50
          flex flex-col justify-center items-center gap-8 text-xl
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
