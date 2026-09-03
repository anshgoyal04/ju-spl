// One shared image per Variety type — used as a fallback whenever a specific
// model/SKU doesn't have its own image. Change these 6 paths any time.
export const VARIETY_IMAGES: Record<string, string> = {
  "Piston": "/images/products-catalog/piston.png",
  "Ring": "/images/products-catalog/ring.png",
  "Piston Kit": "/images/products-catalog/piston-kit.png",
  "Block": "/images/products-catalog/block.png",
  "Block Kit": "/images/products-catalog/cylinder-kit.png",
  "Valve": "/images/products-catalog/valve.png",
};

export function getVarietyImage(varietyName: string, specificImage?: string) {
  // If this exact model/variety already has its own image set, use that.
  if (specificImage) return specificImage;
  // Otherwise fall back to the shared image for this variety type.
  return VARIETY_IMAGES[varietyName] || "";
}