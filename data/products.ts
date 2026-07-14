export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
  applications: string[];
  brands: string[];
  color: string;
  image:string;
};

export const BRANDS = [
  "Hero", "Honda", "Yamaha", "TVS", "Bajaj", "Royal Enfield", "Suzuki", "Mahindra", "Piaggio", "KTM",
];

export const PRODUCTS: Product[] = [
  {
    slug: "piston-assembly-kits",
    name: "Piston Assembly Kits",
    category: "Assemblies",
    summary: "Complete ready-to-fit piston assemblies engineered for BS-6 motorcycle and scooter engines.",
    description:
      "Our piston assembly kits combine a precision-cast piston, ring set, gudgeon pin and circlips into a single balanced unit, dimensionally matched to OEM tolerances. Every kit is inspected for weight, roundness and ring-gap before packing.",
    specs: [
      { label: "Material", value: "Hypereutectic aluminium alloy" },
      { label: "Finish", value: "Hard anodized / graphite coated" },
      { label: "Tolerance", value: "±0.005 mm" },
      { label: "Ring set", value: "3-ring / 2-ring configurations" },
    ],
    image: "/images/products/cg-150.png",
    applications: ["Motorcycles", "Scooters", "Three-wheelers"],
    brands: ["Hero", "Honda", "TVS", "Bajaj", "Yamaha"],
    color: "coral",
  },
  {
    slug: "pistons",
    name: "Pistons",
    category: "Core Component",
    summary: "High-precision cast and forged pistons built for durability, heat resistance and long engine life.",
    description:
      "Manufactured from premium aluminium alloys and machined on CNC lines, our pistons are engineered for consistent compression, low oil consumption and extended service life across BS-6 and export engine platforms.",
    specs: [
      { label: "Bore range", value: "50 mm – 100 mm" },
      { label: "Skirt coating", value: "Graphite / Moly coated" },
      { label: "Compression ratio", value: "Application specific" },
      { label: "Weight tolerance", value: "±1 gram" },
    ],
    image: "/images/products/piston-image.png",
    applications: ["Motorcycles", "Scooters", "Industrial engines"],
    brands: ["Hero", "Honda", "Yamaha", "TVS", "Suzuki"],
    color: "red",
  },
  {
    slug: "piston-rings",
    name: "Piston Rings",
    category: "Core Component",
    summary: "Precision-ground compression and oil control rings for optimal sealing and reduced blow-by.",
    description:
      "Our piston rings are chrome and PVD coated for wear resistance, carrying heat away from the piston crown to the cylinder wall while maintaining a consistent seal across the engine's service life.",
    specs: [
      { label: "Coating", value: "Chrome / PVD" },
      { label: "Ring types", value: "Compression, wiper, oil control" },
      { label: "Tension tolerance", value: "±3%" },
      { label: "Material", value: "Alloy cast iron" },
    ],
    image: "/images/products/piston-ring.png",
    applications: ["Motorcycles", "Scooters", "Three-wheelers"],
    brands: ["Bajaj", "TVS", "Hero", "Royal Enfield"],
    color: "amber",
  },
  {
    slug: "cylinder-block-kits",
    name: "Cylinder Block Kits",
    category: "Assemblies",
    summary: "Complete cylinder block assemblies matched to piston and ring specifications for direct fitment.",
    description:
      "Cast and machined in-house, our cylinder block kits arrive honed to final bore tolerance and paired with a matched piston and ring set, cutting fitment time for OEM and bulk dealer orders.",
    specs: [
      { label: "Bore finish", value: "Plateau honed" },
      { label: "Material", value: "Grey cast iron / aluminium composite" },
      { label: "Kit contents", value: "Block, piston, rings, gasket" },
      { label: "Testing", value: "100% leak and dimension tested" },
    ],
    image: "/images/products/cylinder-block-kit.png",
    applications: ["Motorcycles", "Scooters"],
    brands: ["Honda", "Hero", "TVS", "Bajaj"],
    color: "teal",
  },
  {
    slug: "cylinder-liners",
    name: "Cylinder Liners",
    category: "Core Component",
    summary: "Wear-resistant cylinder liners forming the precision-bored interior of the engine cylinder.",
    description:
      "Centrifugally cast and precision-bored, our cylinder liners are engineered for consistent wall thickness and surface hardness, extending engine rebuild intervals across two-wheeler and light commercial applications.",
    specs: [
      { label: "Casting method", value: "Centrifugal casting" },
      { label: "Hardness", value: "HB 200–240" },
      { label: "Wall finish", value: "Cross-hatch honed" },
      { label: "Fit", value: "Wet / dry liner variants" },
    ],
    image: "/images/products/cylinder-liner.png",
    applications: ["Motorcycles", "Scooters", "Industrial engines"],
    brands: ["Suzuki", "Mahindra", "Piaggio", "KTM"],
    color: "purple",
  },
  {
    slug: "connecting-rods",
    name: "Connecting Rods",
    category: "Core Component",
    summary: "Forged connecting rods engineered to transfer piston force to the crankshaft with minimal flex.",
    description:
      "Drop-forged and shot-peened for fatigue resistance, our connecting rods are dimensionally balanced in matched sets, reducing vibration and extending bearing life across high-revving small-displacement engines.",
    specs: [
      { label: "Process", value: "Drop forged, shot peened" },
      { label: "Material", value: "Carbon / alloy steel" },
      { label: "Balancing", value: "Weight-matched sets" },
      { label: "Bearing bore", value: "Precision honed" },
    ],
    image: "/images/products/connecting-rod.png",
    applications: ["Motorcycles", "Scooters", "Three-wheelers"],
    brands: ["Hero", "Bajaj", "TVS", "Yamaha"],
    color: "pink",
  },
  {
    slug: "valve-sets",
    name: "Valve Sets",
    category: "Core Component",
    summary: "Intake and exhaust valve sets engineered for high-temperature sealing and long service life.",
    description:
      "Forged from heat-resistant alloy steel and finished with a hardened seat face, our valve sets maintain a reliable seal cycle after cycle, even under sustained high-RPM and export-market duty conditions.",
    specs: [
      { label: "Material", value: "Alloy / heat-resistant steel" },
      { label: "Seat finish", value: "Induction hardened" },
      { label: "Stem tolerance", value: "±0.01 mm" },
      { label: "Set contents", value: "Intake + exhaust pair" },
    ],
    image: "/images/products/valve-set.png",
    applications: ["Motorcycles", "Scooters"],
    brands: ["Honda", "Yamaha", "Royal Enfield", "KTM"],
    color: "coral",
  },
  {
    slug: "engine-components",
    name: "Engine Components",
    category: "Components",
    summary: "Gudgeon pins, circlips, gaskets and other precision-machined small engine components.",
    description:
      "Beyond core piston and cylinder parts, we supply the full range of small precision components — gudgeon pins, circlips, gasket sets and washers — machined to the same OEM tolerance standard as our headline products.",
    specs: [
      { label: "Range", value: "Pins, circlips, gaskets, washers" },
      { label: "Material", value: "Case-hardened steel / composite" },
      { label: "Packing", value: "Bulk or retail-ready" },
      { label: "QC", value: "100% dimension checked" },
    ],
    image: "/images/products/engine-comp.png",
    applications: ["Motorcycles", "Scooters", "Industrial engines"],
    brands: ["Hero", "TVS", "Bajaj", "Mahindra", "Piaggio"],
    color: "teal",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3) {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}
