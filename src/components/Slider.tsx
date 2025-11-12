import { useEffect, useState } from "react";
import slide01 from "../assets/images/slide01.jpg";
import slide02 from "../assets/images/slide02.jpg";
import slide03 from "../assets/images/slide03.jpg";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "زعفران؛ طلای سرخ ایران",
    description: "بهترین کیفیت زعفران اصیل ایرانی با رنگ و عطر بی‌نظیر",
    img: slide01,
  },
  {
    id: 2,
    title: "خواص زعفران",
    description: "افزایش انرژی، بهبود روحیه و تقویت سلامت بدن",
    img: slide02,
  },
  {
    id: 3,
    title: "تجربه لذت‌بخش",
    description: "طعم و رنگ زعفران اصیل را در آشپزی و نوشیدنی‌ها تجربه کنید",
    img: slide03,
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative" dir="rtl">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-none w-screen h-full relative">
            <img
              src={slide.img}
              alt="slider"
              className="w-full h-full object-cover"
            />

            {/* TEXT OVER IMAGE */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-4 text-right text-white max-w-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold">
                {slide.title}
              </h1>
              <h2 className="text-lg sm:text-md md:text-xl lg:text-2xl 2xl:text-4xl">
                {slide.description}
              </h2>
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button className="cursor-pointer bg-purple-800"> 
              <Link to="/">خرید کنید</Link>
            </Button>
            <Button variant="ghost" className="cursor-pointer bg-gray-500">
              <Link to="/">مشاهده محصولات</Link>
            </Button>
          </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-black/0"></div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute left-1/2 bottom-8 flex gap-4 -translate-x-1/2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ring-1 ring-white cursor-pointer flex justify-center items-center ${
              current === index ? "scale-150" : ""
            }`}
          >
            {current === index && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
