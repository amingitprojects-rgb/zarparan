import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#FEF3C7] overflow-hidden pt-20 pb-10">

      <Container className="relative z-10">
        <div className="block w-20 bg-white rounded-full shadow-md px-6 py-2 m-auto text-gray-800 font-medium mb-6">
          logo
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-gray-800 mb-4">زرپران</h3>
            <p className="text-gray-600 text-sm leading-6 max-w-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              لینک‌های مهم
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="#" className="hover:text-gray-900">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          {/* LEFT */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4 mt-4">
              <Link to="#">
                <Instagram className="text-gray-700 hover:text-pink-500 transition" />
              </Link>
              <Link to="#">
                <Twitter className="text-gray-700 hover:text-blue-500 transition" />
              </Link>
              <Link to="#">
                <Facebook className="text-gray-700 hover:text-blue-700 transition" />
              </Link>
              <Link to="#">
                <Youtube className="text-gray-700 hover:text-red-600 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-gray-300 pt-6 text-sm text-gray-600">
          <p>© 2025 زرپران - تمامی حقوق محفوظ است.</p>
          <div className="mt-3 md:mt-0 flex gap-4 items-center">
            <span>مجوزهای ما:</span>
            <div className="w-10 h-10 bg-white rounded-md shadow"></div>
            <div className="w-10 h-10 bg-white rounded-md shadow"></div>
            <div className="w-10 h-10 bg-white rounded-md shadow"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
