/* ---------- ENUM TYPES ---------- */

export type SaffronType = "نگین" | "سرگل" | "پوشال" | "دسته" | "سفید";

export type QualityType = "درجه یک" | "درجه دو" | "ممتاز" | "صادراتی";

export type PackagingType = "کریستال" | "فلزی" | "پاکتی" | "جعبه‌ای";

export type SaleType = "خرد" | "عمده";

export type YesNo = "بله" | "خیر";

export type PriceType = "توافقی" | "قیمت پایه";

/* ---------- MAIN FORM TYPE ---------- */

export interface NewAdFormData {
  /* STEP 1 */
  images: File[];
  saffronType: SaffronType;
  quality: QualityType;
  harvestYear: string;
  weight: string;
  packaging: PackagingType;
  saleType: SaleType;
  hasBrand: YesNo;

  /* STEP 2 */
  priceType: PriceType;
  unitPrice: string;
}

/* ---------- INITIAL DATA ---------- */

export const initialFormData: NewAdFormData = {
  images: [],
  saffronType: "نگین",
  quality: "درجه یک",
  harvestYear: "1404",
  weight: "",
  packaging: "کریستال",
  saleType: "خرد",
  hasBrand: "خیر",

  priceType: "توافقی",
  unitPrice: "",
};
