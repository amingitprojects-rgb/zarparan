import {
  FilePlus,
  HelpCircle,
  LogOut,
  Megaphone,
  ScrollText,
  Settings,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";
import userImg from "../assets/images/bg-authpage.jpg";
import { NavLink, Outlet } from "react-router-dom";

export default function UserPanelLayout() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SIDEBAR */}
        <div className="bg-gray-200 rounded-2xl shadow-sm border p-6 h-fit">
          {/* profile */}
          <div className="flex justify-between items-center gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={userImg} alt="profile" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">فروشگاه احمدی</p>
                <p className="text-gray-500 text-sm">09123456789</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Settings />
              <LogOut />
            </div>
          </div>

          {/* MENU */}
          <ul className="space-y-5 mt-8 text-gray-700">
            <li>
              <NavLink
                end
                to="/user-panel"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span className="font-bold">|</span>
                <User />
                پنل کاربری
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-panel/my-ads"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span>|</span>
                <Megaphone />
                آگهی‌های من
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-panel/wallet"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span>|</span>
                <Wallet />
                کیف پول من
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-panel/new-ad"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span>|</span>
                <FilePlus />
                ثبت آگهی
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-panel/rules"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span>|</span>
                <ScrollText />
                قوانین
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-panel/support"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span>|</span>
                <HelpCircle />
                پشتیبانی
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-panel/authentication"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-bold transition
        ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                <span>|</span>
                <ShieldCheck />
                احراز هویت
              </NavLink>
            </li>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="md:col-span-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
