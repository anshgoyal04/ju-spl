export type CatalogSKU = {
  sku: string;
  size: string;
  sizeCode: string;
};

export type CatalogVariety = {
  varietyCode: string;
  variety: string;
  skus: CatalogSKU[];
  allSizesAvailable: boolean;
  image: string;
};

export type CatalogModel = {
  modelAlias: string;
  modelName: string;
  brand: string;
  varieties: CatalogVariety[];
};