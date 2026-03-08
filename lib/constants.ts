// ─── Site Data & Constants ──────────────────────────────────────────────────

export const COMPANY = {
  name: 'BLUESTAR ENTERPRISES',
  shortName: 'Bluestar',
  tagline: 'Leading Supplier of Nickel Alloys & Specialty Metals',
  description: 'Incorporated and established in the year 2011, BLUESTAR ENTERPRISES is a world class company affianced in the arena of a manufacturer, supplier and trader of top class grade of industrial iron products.',
  founded: 2011,
  founder: 'Mr. Santosh Kasar',
  phone: ['+91-9930707298', '02135 278303'],
  email: 'sales@bluestarenterprises.co.in',
  whatsapp: '919930707298',
  website: 'https://www.bluestarenterprises.co.in',
  address: {
    office: {
      title: 'Manufacturing & Supply Office',
      line1: 'Gat No. 1436, Chakan - Talegaon Road',
      line2: 'Chakan MIDC, Phase - I, Chakan',
      city: 'Pune-410501',
      state: 'Maharashtra, India',
    },
    head: {
      title: 'Head Office',
      line1: 'Shop No-24/2, 2nd Lane',
      line2: 'Khetwadi',
      city: 'Mumbai-400004',
      state: 'Maharashtra, India',
    },
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Enquiry', href: '/enquiry' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS = [
  {
    slug: 'alloy-20',
    name: 'Alloy 20',
    grade: 'UNS N08020 / WNR 2.4660',
    image: '/images/products/alloy-20.jpg',
    gallery: [
      '/images/products/alloy-20/pipes-tubes.jpg',
      '/images/products/alloy-20/sheets.jpg',
      '/images/products/alloy-20/round-bars.jpg',
      '/images/products/alloy-20/fittings.jpg',
      '/images/products/alloy-20/flanges.jpg',
    ],
    description: 'Alloy 20 is a nickel-iron-chromium alloy with additions of copper, molybdenum, and niobium for exceptional resistance to acid attack, especially sulfuric acid.',
    applications: ['Chemical Processing', 'Pharmaceuticals', 'Food Processing', 'Synthetic Fibers'],
    features: ['Excellent sulfuric acid resistance', 'Stress corrosion cracking resistant', 'Good mechanical properties', 'Pitting & crevice corrosion resistant'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges', 'Fasteners'],
  },
  {
    slug: 'copper-nickel',
    name: 'Copper Nickel',
    grade: '70/30 & 90/10',
    image: '/images/products/copper-nickel.jpg',
    gallery: [
      '/images/products/copper-nickel/cu70-30.jpg',
      '/images/products/copper-nickel/cu90-10.jpg',
    ],
    description: 'Copper Nickel alloys offer excellent resistance to seawater corrosion, biofouling, and stress corrosion cracking, making them ideal for marine applications.',
    applications: ['Marine Engineering', 'Desalination Plants', 'Offshore Oil & Gas', 'Power Generation'],
    features: ['Superior seawater resistance', 'Anti-biofouling properties', 'Good thermal conductivity', 'Excellent fabricability'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Fittings', 'Flanges'],
  },
  {
    slug: 'duplex-super-duplex',
    name: 'Duplex / Super Duplex',
    grade: 'UNS S31803 / S32205 / S32750 / S32760',
    image: '/images/products/duplex-super-duplex.jpg',
    gallery: [
      '/images/products/duplex/duplex-steel.jpg',
      '/images/products/duplex/duplex-sheet.jpg',
      '/images/products/duplex/lean-duplex.jpg',
      '/images/products/duplex/hyper-duplex.jpg',
      '/images/products/duplex/super-duplex.jpg',
      '/images/products/duplex/duplex-s31803.jpg',
    ],
    description: 'Duplex stainless steels combine the best properties of austenitic and ferritic steels, providing high strength with excellent corrosion resistance.',
    applications: ['Oil & Gas Industry', 'Chemical Processing', 'Marine Applications', 'Pulp & Paper'],
    features: ['High mechanical strength', 'Excellent corrosion resistance', 'Good weldability', 'Stress corrosion cracking resistant'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges'],
  },
  {
    slug: 'forged-fittings',
    name: 'Forged Fittings',
    grade: 'Socket Weld & Threaded',
    image: '/images/products/forged-fittings.jpg',
    gallery: [
      '/images/products/forged-fittings/forged-fitting.jpg',
      '/images/products/forged-fittings/socket-weld.jpg',
      '/images/products/forged-fittings/threaded.jpg',
      '/images/products/forged-fittings/forged-socketweld.jpg',
    ],
    description: 'High-quality forged fittings manufactured to stringent industrial standards, available in various materials including stainless steel, nickel alloys, and specialty metals.',
    applications: ['High Pressure Systems', 'Chemical Plants', 'Oil Refineries', 'Power Plants'],
    features: ['High pressure rating', 'Superior strength', 'Dimensional accuracy', 'Multiple material options'],
    forms: ['Elbows', 'Tees', 'Couplings', 'Unions', 'Bushings', 'Caps', 'Plugs'],
  },
  {
    slug: 'hastelloy',
    name: 'Hastelloy',
    grade: 'C276 / C22 / B3 / C2000',
    image: '/images/products/hastelloy.jpg',
    gallery: [
      '/images/products/hastelloy/c276.jpg',
      '/images/products/hastelloy/c22.jpg',
      '/images/products/hastelloy/c2000.jpg',
      '/images/products/hastelloy/b3.jpg',
    ],
    description: 'Hastelloy alloys are nickel-based alloys with outstanding resistance to a wide range of chemical environments, making them the gold standard for corrosion resistance.',
    applications: ['Chemical Processing', 'Pollution Control', 'Waste Treatment', 'Pharmaceutical'],
    features: ['Outstanding corrosion resistance', 'High temperature stability', 'Excellent fabricability', 'Resistance to pitting & crevice corrosion'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges', 'Wire'],
  },
  {
    slug: 'inconel',
    name: 'Inconel',
    grade: '600 / 601 / 625 / 718 / 800H / 800HT / 825',
    image: '/images/products/inconel.jpg',
    gallery: [
      '/images/products/inconel/inconel-600.jpg',
      '/images/products/inconel/pipes.jpg',
      '/images/products/inconel/flanges.jpg',
      '/images/products/inconel/butt-weld.jpg',
      '/images/products/inconel/round-bars.jpg',
      '/images/products/inconel/fasteners.jpg',
      '/images/products/inconel/forged-fittings.jpg',
    ],
    description: 'Inconel alloys are oxidation and corrosion resistant materials well suited for service in extreme environments subjected to high temperature and pressure.',
    applications: ['Aerospace', 'Gas Turbines', 'Nuclear Reactors', 'Heat Treatment Equipment'],
    features: ['High temperature strength', 'Oxidation resistant', 'Carburization resistant', 'Excellent creep-rupture strength'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges', 'Wire', 'Fasteners'],
  },
  {
    slug: 'monel-400',
    name: 'Monel 400',
    grade: 'UNS N04400 / WNR 2.4360',
    image: '/images/products/monel-400.jpg',
    gallery: [
      '/images/products/monel/pipes-tubes.jpg',
      '/images/products/monel/flanges.jpg',
      '/images/products/monel/sheets.jpg',
      '/images/products/monel/butt-weld.jpg',
      '/images/products/monel/forged-fittings.jpg',
    ],
    description: 'Monel 400 is a nickel-copper alloy that is resistant to sea water, steam, salt solutions, and caustic environments. It has excellent mechanical properties.',
    applications: ['Marine Engineering', 'Chemical Processing', 'Oil & Gas', 'Valves & Pumps'],
    features: ['Excellent corrosion resistance', 'Good mechanical properties', 'Low magnetic permeability', 'Velocity effects resistance in seawater'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges'],
  },
  {
    slug: 'nickel-200',
    name: 'Nickel 200',
    grade: 'UNS N02200 / WNR 2.4066',
    image: '/images/products/nickel-200.jpg',
    gallery: [
      '/images/products/nickel/plates.jpg',
      '/images/products/nickel/round-bars.jpg',
      '/images/products/nickel/pipes-tubes.jpg',
      '/images/products/nickel/fasteners.jpg',
    ],
    description: 'Nickel 200 is commercially pure wrought nickel. It has good mechanical properties and excellent resistance to many corrosive environments.',
    applications: ['Chemical Processing', 'Electronics', 'Food Processing', 'Aerospace'],
    features: ['Excellent corrosion resistance', 'High thermal conductivity', 'Good magnetostrictive properties', 'Low gas content'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Wire'],
  },
  {
    slug: 'nimonic',
    name: 'Nimonic',
    grade: 'Nimonic 75 / Nimonic 80',
    image: '/images/products/nimonic.jpg',
    gallery: [
      '/images/products/nimonic/nimonic75.jpg',
      '/images/products/nimonic/nimonic80.jpg',
    ],
    description: 'Nimonic alloys are nickel-chromium alloys designed for high temperature service where high strength and resistance to creep and oxidation are essential.',
    applications: ['Gas Turbines', 'Aerospace Industry', 'Industrial Furnaces', 'Nuclear Engineering'],
    features: ['High creep rupture strength', 'Oxidation resistant', 'Excellent high-temp properties', 'Good fatigue resistance'],
    forms: ['Round Bars', 'Plates & Sheets', 'Wire', 'Fasteners'],
  },
  {
    slug: 'super-stainless-steel',
    name: 'Super Stainless Steel',
    grade: 'SMO 254 / SS 904L / AL-6XN / 253 MA / SMO 654',
    image: '/images/products/super-stainless-steel.jpg',
    gallery: [
      '/images/products/super-stainless/sheets-plates.jpg',
      '/images/products/super-stainless/253ma.jpg',
      '/images/products/super-stainless/smo654.jpg',
      '/images/products/super-stainless/sanicro28.jpg',
      '/images/products/super-stainless/ss904l.jpg',
      '/images/products/super-stainless/al6xn.jpg',
      '/images/products/super-stainless/alloy31.jpg',
    ],
    description: 'Super stainless steels offer superior corrosion resistance compared to standard grades, making them ideal for highly corrosive environments.',
    applications: ['Chemical Processing', 'Pulp & Paper', 'Ocean Engineering', 'Desalination'],
    features: ['Superior corrosion resistance', 'High molybdenum content', 'Pitting & crevice corrosion resistant', 'High strength'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges'],
  },
  {
    slug: 'titanium',
    name: 'Titanium',
    grade: 'Gr 2 / UNS R50400 | Gr 5 / UNS R56400',
    image: '/images/products/titanium.jpg',
    gallery: [
      '/images/products/titanium/titanium-products.jpg',
      '/images/products/titanium/gr2.jpg',
      '/images/products/titanium/gr5.jpg',
    ],
    description: 'Titanium offers excellent strength-to-weight ratio and outstanding corrosion resistance. Used extensively in aerospace, marine, and chemical industries.',
    applications: ['Aerospace', 'Marine', 'Chemical Processing', 'Medical Implants'],
    features: ['Excellent strength-to-weight ratio', 'Outstanding corrosion resistance', 'Biocompatible', 'High temperature capability'],
    forms: ['Pipes & Tubes', 'Plates & Sheets', 'Round Bars', 'Fittings', 'Flanges', 'Wire'],
  },
  {
    slug: 'gauges',
    name: 'Gauges',
    grade: 'Industrial Grade',
    image: '/images/products/gauges.jpg',
    gallery: [
      '/images/products/gauges.jpg',
    ],
    description: 'Precision industrial gauges for accurate measurement and monitoring in demanding industrial applications.',
    applications: ['Process Industries', 'Oil & Gas', 'Chemical Plants', 'Power Generation'],
    features: ['High precision', 'Durable construction', 'Multiple range options', 'Industry standard compliance'],
    forms: ['Pressure Gauges', 'Temperature Gauges', 'Level Gauges'],
  },
];

export const SERVICES = [
  {
    title: 'Polishing',
    description: 'Professional surface polishing services for achieving mirror-quality and satin finishes on all types of metal products.',
    icon: 'sparkles',
  },
  {
    title: 'Testing',
    description: 'Comprehensive material testing includes chemical analysis, mechanical testing, and non-destructive testing to ensure quality standards.',
    icon: 'clipboard',
  },
  {
    title: 'Packing',
    description: 'Industrial-grade packaging solutions to ensure safe transportation of materials to any destination worldwide.',
    icon: 'package',
  },
  {
    title: 'Logistics',
    description: 'End-to-end logistics management including warehousing, transportation, and customs documentation for global delivery.',
    icon: 'truck',
  },
  {
    title: 'Door to Door Service',
    description: 'Complete door-to-door delivery service ensuring your materials reach your facility safely and on schedule.',
    icon: 'home',
  },
  {
    title: 'Band Sawing',
    description: 'Precision band sawing services for cutting metal products to exact specifications and dimensions.',
    icon: 'ruler',
  },
  {
    title: 'Forging',
    description: 'Custom forging services to produce components with superior mechanical properties and dimensional accuracy.',
    icon: 'hammer',
  },
  {
    title: 'Heat Treatment',
    description: 'Controlled heat treatment processes to achieve desired material properties including hardness, strength, and ductility.',
    icon: 'flame',
  },
  {
    title: 'EFW Fabricated Pipes',
    description: 'Electric Fusion Welded pipe fabrication for large diameter requirements across various industrial applications.',
    icon: 'cylinder',
  },
  {
    title: 'Water Jet Cutting',
    description: 'High-precision water jet cutting for complex shapes and profiles without heat-affected zones.',
    icon: 'droplets',
  },
  {
    title: 'Shearing',
    description: 'Industrial shearing services for precise cutting of plates, sheets, and other flat metal products.',
    icon: 'scissors',
  },
  {
    title: 'Reserved Inventory',
    description: 'Dedicated inventory management allowing clients to reserve stock for planned projects and scheduled deliveries.',
    icon: 'warehouse',
  },
];

export const INDUSTRIES = [
  { name: 'Oil & Gas', icon: 'droplets', description: 'Corrosion-resistant alloys for drilling, refining, and pipeline applications.' },
  { name: 'Chemical Processing', icon: 'flask', description: 'High-performance materials for reactors, heat exchangers, and piping systems.' },
  { name: 'Marine', icon: 'anchor', description: 'Seawater-resistant alloys for offshore platforms and shipbuilding.' },
  { name: 'Power Plants', icon: 'zap', description: 'Heat-resistant alloys for boilers, turbines, and nuclear applications.' },
  { name: 'Manufacturing', icon: 'factory', description: 'Industrial-grade metals for general and precision manufacturing.' },
  { name: 'Petrochemical', icon: 'fuel', description: 'Specialty alloys for petrochemical processing and refining operations.' },
  { name: 'Aerospace', icon: 'plane', description: 'High-performance alloys meeting aerospace standards and certifications.' },
  { name: 'Pharmaceutical', icon: 'pill', description: 'Corrosion-resistant materials compliant with pharmaceutical hygiene standards.' },
];

export const STATS = [
  { value: 13, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Products Delivered' },
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 50, suffix: '+', label: 'Alloy Grades' },
];

export const WHY_CHOOSE_US = [
  { title: 'Quality Materials', description: 'Top-grade raw materials sourced from certified mills worldwide with complete traceability.', icon: 'shield' },
  { title: 'Industry Expertise', description: '13+ years of experience in nickel alloys and specialty metals for critical applications.', icon: 'award' },
  { title: 'Custom Solutions', description: 'Tailored material solutions to meet your specific industrial requirements and specifications.', icon: 'settings' },
  { title: 'Competitive Pricing', description: 'Best-in-class pricing with transparent quotations and no hidden charges.', icon: 'trending' },
  { title: 'Reliable Supply Chain', description: 'Robust supply network ensuring on-time delivery across India and globally.', icon: 'link' },
  { title: 'Technical Support', description: 'Expert metallurgical consultation for material selection and application guidance.', icon: 'headphones' },
];

export const TIMELINE = [
  { year: '2011', title: 'Company Established', description: 'BLUESTAR ENTERPRISES founded by Mr. Santosh Kasar with a vision to become India\'s premier nickel alloy supplier.' },
  { year: '2015', title: 'Product Expansion', description: 'Expanded portfolio to include Hastelloy, Inconel, Monel, and Titanium product lines.' },
  { year: '2018', title: 'Industrial Partnerships', description: 'Established strategic partnerships with leading mills and global material suppliers.' },
  { year: '2021', title: 'Decade of Excellence', description: 'Celebrated 10 years of service with 500+ satisfied clients across multiple industries.' },
  { year: '2024', title: 'Nationwide Network', description: 'Expanded supply network covering all major industrial hubs across India with warehouse facilities.' },
];

export const TESTIMONIALS = [
  { name: 'Rajesh Patel', company: 'Petrochem Industries', text: 'Bluestar Enterprises has been our trusted supplier for Hastelloy products for over 5 years. Their quality and delivery consistency is unmatched.' },
  { name: 'Deepak Sharma', company: 'Marine Engineering Corp', text: 'Excellent service and competitive pricing. Their technical knowledge of nickel alloys helped us select the right grade for our marine project.' },
  { name: 'Priya Mehta', company: 'Gujarat Chemical Works', text: 'We rely on Bluestar for all our specialty metal requirements. Their Inconel and Monel products consistently meet our stringent quality standards.' },
];

export const FAQS = [
  { q: 'What types of alloy products does Bluestar Enterprises supply?', a: 'We supply a comprehensive range of nickel alloys and specialty metals including Hastelloy, Inconel, Monel, Alloy 20, Titanium, Duplex & Super Duplex Steel, Copper Nickel, Nimonic, and Super Stainless Steel in various forms like pipes, tubes, plates, sheets, bars, fittings, flanges, and fasteners.' },
  { q: 'Do you provide material test certificates?', a: 'Yes, all our materials come with Mill Test Certificates (MTC), chemical analysis reports, and mechanical test reports. Third-party inspection certificates from TÜV, SGS, or BV are available upon request.' },
  { q: 'What is your typical delivery timeframe?', a: 'For ex-stock items, we deliver within 3-5 business days. For mill-direct orders, lead times range from 2-8 weeks depending on product specifications and quantity.' },
  { q: 'Do you supply materials for export?', a: 'Yes, we have extensive experience in international supply with proper export packaging, documentation, and logistics support for global shipments.' },
  { q: 'Can you supply cut-to-size materials?', a: 'Absolutely. We offer precision cutting services including band sawing, water jet cutting, and shearing to deliver materials in exact dimensions required for your project.' },
  { q: 'What industries do you serve?', a: 'We serve Oil & Gas, Chemical Processing, Marine, Power Generation, Aerospace, Pharmaceutical, Petrochemical, and general Manufacturing industries.' },
];
