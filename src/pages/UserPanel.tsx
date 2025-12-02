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

export default function UserPanel() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] flex flex-col items-center py-10 px-4 md:px-10">
      {/* Top Welcome */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <div className="text-gray-700 font-medium text-lg flex items-center gap-2">
          <span>خوش آمدید</span>
          <span className="font-bold text-xl text-gray-900">امیر احمدی</span>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Right Sidebar */}
        <div className="bg-gray-200 rounded-2xl shadow-sm border p-6 h-fit order-1 md:order-1">
          <div className="flex justify-between items-center gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={userImg}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-semibold text-gray-800">فروشگاه احمدی</p>
                <p className="text-gray-500 text-sm">09123456789</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <button>
                <Settings />
              </button>

              <button>
                <LogOut />
              </button>
            </div>
          </div>

          <ul className="space-y-5 mt-8 text-gray-700 text-right">
            <li className="font-bold">
              <button className="flex items-center gap-1 text-primary">
                <span>|</span>
                <User />
                پنل کاربری
              </button>
            </li>

            <li className="font-bold">
              <button className="flex items-center gap-1">
                <span>|</span>
                <Megaphone />
                اگهی های من
              </button>
            </li>

            <li className="font-bold">
              <button className="flex items-center gap-1">
                <span>|</span>
                <FilePlus />
                ثبت آگهی
              </button>
            </li>

            <li className="font-bold">
              <button className="flex items-center gap-1">
                <span>|</span>
                <Wallet />
                کیف پول من
              </button>
            </li>

            <li className="font-bold">
              <button className="flex items-center gap-1">
                <span>|</span>
                <ScrollText />
                قوانین
              </button>
            </li>

            <li className="font-bold">
              <button className="flex items-center gap-1">
                <span>|</span>
                <HelpCircle />
                پشتیبانی
              </button>
            </li>

            <li className="font-bold">
              <button className="flex items-center gap-1">
                <span>|</span>
                <ShieldCheck />
                احراز هویت
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-10 order-2 md:order-2">
          <div className="border rounded-2xl p-6 h-72 border-yellow-300 bg-[#FFFCF2]">
            <h2 className="mb-4 text-gray-800 font-semibold">مشخصات من</h2>
          </div>

          <div className="border rounded-2xl p-6 border-yellow-300 bg-[#FFFCF2]">
            <h2 className="mb-4 text-gray-800 font-semibold">تیکت‌های من</h2>
            <div className="h-24 flex items-center justify-center text-gray-500">
              هنوز تیکتی ارسال نکرده اید
            </div>
          </div>

          <div className="border rounded-2xl p-6 border-yellow-300 bg-[#FFFCF2]">
            <h2 className="mb-4 text-gray-800 font-semibold">آگهی‌های من</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="h-24 bg-white border rounded-xl"></div>
              <div className="h-24 bg-white border rounded-xl"></div>
              <div className="h-24 bg-white border rounded-xl flex items-center justify-center text-4xl text-gray-400">
                +
              </div>
            </div>

            <button className="px-6 py-2 border border-purple-400 text-purple-600 rounded-xl text-sm">
              آگهی‌های بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
