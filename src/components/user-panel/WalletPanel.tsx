import { Clock, Wallet as WalletIcon } from "lucide-react";

export default function WalletPanel() {
  return (
    <div className="space-y-8">
      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">کیف پول من</h2>
        <p className="text-sm text-gray-500 mb-6">
          درآمد فروش زعفران شما پس از تسویه به کیف پول شما واریز می‌شود.
        </p>

        <div className="border border-yellow-200 rounded-xl p-5 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <WalletIcon size={18} />
                  موجودی قابل برداشت
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  45,000,000
                  <span className="text-sm font-medium mr-1">تومان</span>
                </div>
              </div>

              <button className="mt-6 bg-purple-600 text-white py-2 rounded-xl text-sm hover:bg-purple-700 transition">
                افزایش اعتبار +
              </button>
            </div>

            <div className="border rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Clock size={18} />
                  در انتظار تسویه
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  450,000
                  <span className="text-sm font-medium mr-1">تومان</span>
                </div>
              </div>

              <button className="mt-6 border border-purple-400 text-purple-600 py-2 rounded-xl text-sm hover:bg-purple-50 transition">
                برداشت وجه
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            تاریخچه تراکنش‌ها
          </h2>

          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1 rounded-lg bg-gray-200">همه</button>
            <button className="px-3 py-1 rounded-lg bg-gray-100">فروش</button>
            <button className="px-3 py-1 rounded-lg bg-gray-100">خرید</button>
            <button className="px-3 py-1 rounded-lg bg-gray-100">
              برداشت وجه
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100">
              شارژ کیف پول
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 font-medium">تاریخ</th>
                <th className="p-3 font-medium">مبلغ</th>
                <th className="p-3 font-medium">شرح تراکنش</th>
                <th className="p-3 font-medium">وضعیت</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="p-3">1404/11/25</td>
                <td className="p-3 text-green-600">+150,000</td>
                <td className="p-3">فروش</td>
                <td className="p-3 text-yellow-600">در انتظار</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">1404/11/22</td>
                <td className="p-3 text-red-600">-100,000</td>
                <td className="p-3">برداشت وجه</td>
                <td className="p-3 text-green-600">موفق</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">1404/11/05</td>
                <td className="p-3 text-green-600">+1,000,000</td>
                <td className="p-3">شارژ کیف پول</td>
                <td className="p-3 text-red-600">ناموفق</td>
              </tr>

              <tr>
                <td className="p-3">1404/11/22</td>
                <td className="p-3 text-red-600">-1,000,000</td>
                <td className="p-3">خرید</td>
                <td className="p-3 text-green-600">موفق</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <button className="w-8 h-8 border rounded-md">‹</button>
          <button className="w-8 h-8 bg-gray-300 rounded-md">1</button>
          <button className="w-8 h-8 border rounded-md">2</button>
          <button className="w-8 h-8 border rounded-md">3</button>
          <span className="px-2">…</span>
          <button className="w-8 h-8 border rounded-md">8</button>
          <button className="w-8 h-8 border rounded-md">›</button>
        </div>
      </div>
    </div>
  );
}
