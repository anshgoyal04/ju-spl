export type NewLaunchItem = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string; // put your real image at this path inside /public
  launchDate: string;
  amazonUrl: string;
};

export const NEW_LAUNCH_ITEMS: NewLaunchItem[] = [
  {
    slug: "honda-hornet-2-0-bs6-piston-assembly-kit",
    name: "Honda Hornet 2.0 BS6 Piston Assembly Kit",
    tagline: "Direct-fit kit for the Hornet 2.0 BS6 engine",
    description:
      "A complete, ready-to-fit piston assembly for the Honda Hornet 2.0 BS6 — precision-cast and CNC-machined to OEM bore tolerance, with a matched ring set for consistent compression and low oil consumption.",
    highlights: ["OEM bore tolerance", "Matched ring set included", "Direct fitment — no rework needed"],
    image: "/images/new-launch/honda-hornet-2-0-bs6-piston-assembly-kit.png",
    launchDate: "2026-06-10",
    amazonUrl: "#",
  },
  {
    slug: "tvs-jupiter-113cc-bs6-piston-assembly-kit",
    name: "TVS Jupiter 113cc BS6 Piston Assembly Kit",
    tagline: "Built for the Jupiter 113cc scooter platform",
    description:
      "Engineered specifically for the TVS Jupiter 113cc BS6 engine, this piston assembly kit delivers smooth break-in and long service life for daily-use scooter applications.",
    highlights: ["Scooter-specific skirt profile", "Graphite-coated finish", "100% dimension inspected"],
    image: "/images/new-launch/tvs-jupiter-113cc-bs6-piston-assembly-kit.jpg",
    launchDate: "2026-06-01",
    amazonUrl: "https://www.amazon.in/dp/B0H62QGVLW/ref=twister_B0H62HYDN6?_encoding=UTF8&th=1",
  },
  {
    slug: "bajaj-maxima-4v-bs6-piston-assembly-kit",
    name: "Bajaj Maxima 4V BS6 Piston Assembly Kit",
    tagline: "Reliable performance for the Maxima 4V platform",
    description:
      "A durable piston assembly kit built for the Bajaj Maxima 4V BS6 engine, engineered to handle the higher duty cycles typical of three-wheeler commercial use.",
    highlights: ["Built for commercial duty cycles", "Wear-resistant coating", "Consistent compression sealing"],
    image: "/images/new-launch/bajaj-maxima-4v-bs6-piston-assembly-kit.png",
    launchDate: "2026-05-20",
    amazonUrl: "https://www.amazon.in/SPL-Pistons-Assembly-67-00mm-Diameter/dp/B0H62DWQ26/ref=sr_1_1?dib=eyJ2IjoiMSJ9.4OTLppaNoC1cLyIiCWr93CqTAHqYnsPJyphI4oYy_osKIuD0AM7iTx6SRVYDMyvRiMRVtW_dqsApzec0BtBvVDJjxNVt1X4FAqRqLrP3eP6l4gFslQRWT8R3st77GdqaStAbQlo6W657-ajkURWEAWh00_UIIBlm10LwStYv0Sjtw-ZwBt2ATAP23uzWtt1tf5MdjUfHU3wmeJfz36v8xJuSXJu81YsmfZHxBTZlDio0hQdZrVG0G4HOVYY9wg2HJF_NJUCgXcM66sWX5saWO3WJr6WZKha_itJ5MzULyB0.TmHJhinK939NjRF3Hud59U39O_C6eZ3KYQSFdRPdNM4&dib_tag=se&keywords=maxima%2B4v%2Bbs6%2Bpiston&qid=1784109641&sr=8-1&th=1",
  },
  {
    slug: "hero-xtreme-160-4v-bs6-piston-assembly-kit",
    name: "Hero Xtreme 160 4V BS6 Piston Assembly Kit",
    tagline: "Precision-matched for the Xtreme 160 4V engine",
    description:
      "Manufactured to match the Hero Xtreme 160 4V BS6 engine's exact tolerances, this kit is balanced for smoother high-RPM performance and extended engine life.",
    highlights: ["High-RPM balanced assembly", "Hypereutectic alloy", "±0.005 mm tolerance"],
    image: "/images/new-launch/hero-xtreme-160-4v-bs6-piston-assembly-kit.jpg",
    launchDate: "2026-05-05",
    amazonUrl: "https://www.amazon.in/Xtreme-Piston-Assembly-66-50mm-Diameter/dp/B0H3PS24H8/ref=sr_1_1?dib=eyJ2IjoiMSJ9.VSCzdusromUBgaJdbgmQv4Ag9HPe78z7v3KoUpJBQytAdfspE1eHRhobl0UXl9ifrlJQHAIoaomEHWYkz3SC7ISnLYRvtdjvvFKXFkM_XL2dG-H0gVDXF3uaY3iLySMZ1iIoW5tRreQozBqE8tKMDtlG6qlC5Hg6FG9N8_YEAPpbyPu6tKbq_6Nw7ozjvIlwj9Zlvl449GQMunaB2_49TMtf_tPMqWfWOmfh_-V63-D43tiFC34zYsokpfeCsCkCOPpXLhjrWSwCHo6r8oSse68uVjg65o3Rbu4IqbplCVA.2iJeUmVKyWbSN3BojoeIeIOg3utZZHTKupSAdOV6cDk&dib_tag=se&keywords=hero+xtreme+4v+piston&qid=1784109964&sr=8-1",
  },
  {
    slug: "yamaha-rx-100-cylinder-block-kit",
    name: "Yamaha RX-100 Cylinder Block Kit",
    tagline: "The classic, engineered to modern tolerance",
    description:
      "A complete cylinder block kit for the timeless Yamaha RX-100, cast and honed in-house and paired with a matched piston and ring set for reliable, ready-to-fit performance.",
    highlights: ["Plateau-honed bore finish", "Matched piston & ring set", "100% leak and dimension tested"],
    image: "/images/new-launch/yamaha-rx-100-cylinder-block-kit.png",
    launchDate: "2026-04-15",
    amazonUrl: "https://www.amazon.in/SPL-Pistons-Cylinder-50-00mm-Diameter/dp/B0H6FTWKSZ/ref=sr_1_1?crid=1ZK4KJN7ZNOYE&dib=eyJ2IjoiMSJ9.QIiFu-miPtBxNr3jyKlmJxrhvsD1wnUs1cI7lLOk2bGWxqrdq_WsKMNbHvw4iqu8r_Bc-8XpyOF3GlA6ZUuKp6hrTTmetbkl09SpW3AlhxXWSZjMnn8ZvDyzPLLroSODiWMgcFeTzlAMl46SGOOOREeHlE7H3neHvTQczWYLaTHQ47WmWHH73dbAPmQQW0WyVd72nwlkt0fs_5ZFdUy_GR_YNEGbbvTwh5zfFAHObCf0iTF6jgkl7oHDXLVyZii0kZEZvIZBjVYh0DXwFMwXSIdfbdGO7nG7HEOkOsxVlhg.KvpOa3rESEeRPt9Jqs__OU87LA0po4pzGpkGBUy8eYQ&dib_tag=se&keywords=rx+100+cylinder+kit&qid=1784110064&sprefix=rx+10+cylinder+kit%2Caps%2C364&sr=8-1",
  },
  {
    slug: "yamaha-rxg-cylinder-block-kit",
    name: "Yamaha RXG Cylinder Block Kit",
    tagline: "Complete block kit for the RXG platform",
    description:
      "Built for the Yamaha RXG, this cylinder block kit arrives fully honed and matched to piston specification, cutting fitment time for dealers and workshops.",
    highlights: ["Cast & machined in-house", "Direct fitment", "Quality-inspected before dispatch"],
    image: "/images/new-launch/yamaha-rxg-cylinder-block-kit.png",
    launchDate: "2026-04-01",
    amazonUrl: "https://www.amazon.in/SPL-Pistons-Cylinder-58-00mm-Diameter/dp/B0H6G6S89C/ref=sr_1_5?dib=eyJ2IjoiMSJ9.CiALx15d7KenfYsjX21MBzSwKPvufaYoFZXpALvhmNTNHIpCrtciHbBhh-zCa7NiBqVr771dOGEMqfn3t0DnPDsiq0wGsft0nCYGuJox8ui_P7nBKsu4GcaH3BxCAvHWl0eH7vnugGZUYihA0W9gjo76FDv8Iol4FhU6HoXK-PeCkB6BKnPB9sWn6bOMG-1aqc1L8_StKDG8WeWTauoDrQ.a7sp_4sI53YXbniE98r1XpCNXZdH1Ejpuk6InNRkPAc&dib_tag=se&keywords=rxg+cylinder+kit&qid=1784110026&sr=8-5",
  },
];