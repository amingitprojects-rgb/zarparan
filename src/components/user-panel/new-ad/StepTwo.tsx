import type { NewAdFormData } from "./types";
import { Check } from "lucide-react";

interface Props {
  data: NewAdFormData;
  setData: React.Dispatch<React.SetStateAction<NewAdFormData>>;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepTwo({ onNext, onPrev }: Props) {
  return (
    <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
      {/* STEPPER */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <StepCircle done label="مشخصات محصول" number={1} />
        <StepLine active />
        <StepCircle active label="اطلاعات تماس" number={2} />
        <StepLine activeSoft />
        <StepCircle label="بازبینی نهایی" number={3} />
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* RIGHT CARD */}
        <div className="border border-yellow-300 rounded-xl p-4 bg-white">
          <div className="flex items-center justify-center gap-2">
            <label className="text-sm font-semibold mb-4">قیمت بر اساس</label>
            <select
              name=""
              id=""
              className="border rounded-lg px-4 py-2 text-sm bg-gray-100 focus:ring-2"
            >
              <option value="">واحد</option>
            </select>
          </div>

          <div className="mt-4 flex justify-center items-center gap-2">
            <input
            type="number"
              placeholder="تومان"
              className="w-2/3 border rounded-lg px-3 py-2 bg-gray-100 text-sm"
            />
            <span>تومان</span>
          </div>
        </div>

        {/* LEFT CARD */}
        <div className="border border-yellow-300 rounded-xl p-4 bg-white">
          <p className="text-sm font-semibold mb-4">تخفیف (اختیاری)</p>

          <div className="flex items-center gap-2 mb-3">
            <label>مناسبت:</label>
            <input
              type="text"
              placeholder="مثلا شب یلدا"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <label>مقدار:</label>
            <input
              type="number"
              placeholder="مثلا 10"
              className="w-1/4 border rounded-lg px-3 py-2 bg-gray-100 text-sm"
            />
            <span>درصد</span>
          </div>

          <button className="text-xs px-4 py-1 border rounded-md text-gray-600">
            افزودن
          </button>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="text-sm border border-gray-500 px-8 py-2 rounded-lg text-gray-700"
        >
          مرحله قبل
        </button>

        <button
          onClick={onNext}
          className="border border-purple-600 text-purple-600 px-8 py-2 rounded-lg text-sm hover:bg-purple-50"
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function StepCircle({
  label,
  number,
  active,
  done,
}: {
  label: string;
  number: number;
  active?: boolean;
  done?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
        ${active || done ? "bg-purple-600" : "bg-gray-300"}`}
      >
        {done ? <Check size={14} /> : number}
      </div>
      <span
        className={`text-xs ${
          active || done ? "text-purple-600" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function StepLine({
  active,
  activeSoft,
}: {
  active?: boolean;
  activeSoft?: boolean;
}) {
  return (
    <div
      className={`w-10 h-px ${
        active ? "bg-purple-600" : activeSoft ? "bg-purple-300" : "bg-gray-300"
      }`}
    />
  );
}
