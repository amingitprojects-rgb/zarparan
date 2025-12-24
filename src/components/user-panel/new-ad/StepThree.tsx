import { Check } from "lucide-react";

interface Props {
  onSubmit: () => void;
}

export default function StepThree({ onSubmit }: Props) {
  return (
    <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
      {/* TITLE */}
      <p className="text-center text-sm font-semibold mb-6">ثبت آگهی</p>

      {/* STEPPER */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <StepCircle label="مشخصات محصول" />
        <StepLine />
        <StepCircle label="اطلاعات تماس" />
        <StepLine />
        <StepCircle label="بازبینی نهایی" />
      </div>

      {/* CONTENT */}
      <div className="border border-yellow-300 rounded-xl bg-white p-6">
        <p className="text-sm font-semibold mb-4">وضعیت</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm">استان:</label>
            <select
              disabled
              className="border rounded-lg px-3 py-2 text-sm bg-gray-100"
            >
              <option>خراسان رضوی</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm">شهر:</label>
            <select
              disabled
              className="border rounded-lg px-3 py-2 text-sm bg-gray-100"
            >
              <option>مشهد</option>
            </select>
          </div>
        </div>
      </div>

      {/* ACTION */}
      <div className="flex justify-between items-center mt-8">
        <button
          className="text-sm border border-gray-500 px-8 py-2 rounded-lg text-gray-700"
        >
          مرحله قبل
        </button>

        <button
          onClick={onSubmit}
          className="border border-purple-600 text-purple-600 px-10 py-2 rounded-lg text-sm hover:bg-purple-50 transition"
        >
          ثبت آگهی
        </button>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function StepCircle({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
        <Check size={14} />
      </div>
      <span className="text-xs text-purple-600">{label}</span>
    </div>
  );
}

function StepLine() {
  return <div className="w-10 h-px bg-purple-600" />;
}
