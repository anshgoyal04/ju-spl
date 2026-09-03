import { CATALOG_BAJAJ } from "./catalog-bajaj";
import { CATALOG_HERO_HONDA } from "./catalog-hero-honda";
import { CATALOG_SUZUKI_ROYAL } from "./catalog-suzuki-royal";
import { CATALOG_TVS } from "./catalog-tvs";
import { CATALOG_YAMAHA_KTM_MAHINDRA } from "./catalog-yamaha-ktm-mahindra";

import type { CatalogModel, CatalogVariety } from "./catalog-types";
// As you send more brand sheets, import and spread them in here too:
// import { CATALOG_HERO } from "./catalog-hero";
// export const CATALOG: CatalogModel[] = [...CATALOG_TVS, ...CATALOG_HERO];

export const CATALOG: CatalogModel[] = [...CATALOG_TVS, ...CATALOG_HERO_HONDA, ...CATALOG_BAJAJ, ...CATALOG_YAMAHA_KTM_MAHINDRA, ...CATALOG_SUZUKI_ROYAL];

export type SearchResult = {
  model: CatalogModel;
  variety: CatalogVariety;
};

export const ALL_VARIETIES: string[] = Array.from(
  new Set(CATALOG.flatMap((m) => m.varieties.map((v) => v.variety)))
).sort();

export const ALL_BRANDS: string[] = Array.from(new Set(CATALOG.map((m) => m.brand))).sort();

export function searchCatalog(query: string, type: string, brand: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  const results: SearchResult[] = [];

  for (const model of CATALOG) {
    if (brand !== "All Brands" && model.brand !== brand) continue;

    for (const variety of model.varieties) {
      if (type !== "All Types" && variety.variety !== type) continue;

      if (q) {
        const haystack = [
          model.modelName,
          model.modelAlias,
          model.brand,
          variety.variety,
          ...variety.skus.map((s) => s.sku),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) continue;
      }

      results.push({ model, variety });
    }
  }

  return results;
}