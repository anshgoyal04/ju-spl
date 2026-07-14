export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about/company-profile", blurb: "Who we are, 45 years in" },
      { label: "Our Journey", href: "/about/our-journey", blurb: "From foundry to global export" },
      { label: "Infrastructure", href: "/about/infrastructure", blurb: "Plant, tooling & capacity" },
      { label: "Manufacturing Facility", href: "/about/manufacturing-facility", blurb: "Inside the shop floor" },
      { label: "Certifications", href: "/about/certifications", blurb: "Standards we're built on" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Piston Assembly Kits", href: "/products/piston-assembly-kits" },
      { label: "Pistons", href: "/products/pistons" },
      { label: "Piston Rings", href: "/products/piston-rings" },
      { label: "Cylinder Block Kits", href: "/products/cylinder-block-kits" },
      { label: "Cylinder Liners", href: "/products/cylinder-liners" },
      { label: "Connecting Rods", href: "/products/connecting-rods" },
      { label: "Valve Sets", href: "/products/valve-sets" },
      { label: "Engine Components", href: "/products/engine-components" },
    ],
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    children: [
      { label: "Casting", href: "/manufacturing/casting" },
      { label: "Machining", href: "/manufacturing/machining" },
      { label: "Heat Treatment", href: "/manufacturing/heat-treatment" },
      { label: "Quality Inspection", href: "/manufacturing/quality-inspection" },
      { label: "Packaging", href: "/manufacturing/packaging" },
    ],
  },
  {
    label: "Quality",
    href: "/quality",
    children: [
      { label: "Inspection Laboratory", href: "/quality#inspection-laboratory" },
      { label: "Dimension Testing", href: "/quality#dimension-testing" },
      { label: "Hardness Testing", href: "/quality#hardness-testing" },
      { label: "Material Testing", href: "/quality#material-testing" },
    ],
  },
  { label: "OEM Solutions", href: "/oem-solutions" },
  { label: "Export", href: "/export" },
  {
    label: "Dealer Network",
    href: "/dealer-network",
    children: [
      { label: "Become a Dealer", href: "/dealer-network#apply" },
      { label: "Become a Distributor", href: "/dealer-network#apply" },
      { label: "Become an Export Partner", href: "/dealer-network#apply" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
