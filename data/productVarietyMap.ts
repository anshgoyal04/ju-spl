// Maps a generic product-category slug (from data/products.ts) to the matching
// "Variety" name used in the real SKU catalog (data/catalog.ts), so category
// pages can show real, searchable products underneath.
export const PRODUCT_SLUG_TO_VARIETY: Record<string, string> = {
  "piston-assembly-kits": "Piston Kit",
  "pistons": "Piston",
  "piston-rings": "Ring",
  "cylinder-block-kits": "Block Kit",
  "valve-sets": "Valve",
};