import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  {
    title: "ورود",
    href: "/login",
  },

  {
    title: "پنل کاربری",
    href: "/user-panel",
  },

  {
    title: "سبد خرید(1)",
    href: "/cart",
  },
];

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuIcon
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <ul
          className="absolute left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-50
                 bg-white/30 backdrop-blur-md"
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
