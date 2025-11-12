import { ChartLine } from "lucide-react";
import Container from "./Container";

function Prices() {
  return (
    <div className="relative bg-white pb-20">
      <Container>
        <div className="flex flex-col justify-center items-center py-12">
          <div className="flex justify-center items-center gap-2 p-2 rounded-lg text-sm bg-yellow-200 text-yellow-800">
            <ChartLine />
            <p>تحلیل بازار</p>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              قیمت لحظه‌ای زعفران
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-4">
              به‌روزرسانی آنی قیمت‌ها برای انواع درجه‌بندی زعفران در بازار جهانی
            </p>
          </div>

          <div className="w-full h-80 shadow-xl rounded-2xl mt-6 bg-gradient-to-tr from-yellow-50 to-purple-50"></div>
        </div>
      </Container>

      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
        >
          <path
            fill="#FACC15"
            d="M0,120 C480,0 960,120 1440,0 L1440,120 L0,120 Z"
          />
        </svg>
      </div> */}
    </div>
  );
}

export default Prices;
