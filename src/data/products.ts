import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-earbuds-pro',
    name: 'Pro Wireless Earbuds',
    category: 'Audio',
    categorySlug: 'audio',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'New',
    shortDescription: 'Active Noise Cancellation, 36-hour total battery life, and IPX5 water resistance with high-fidelity acoustic driver.',
    fullDescription: 'Experience pristine audio quality with the Pro Wireless Earbuds. Equipped with hybrid active noise cancellation technology that blocks up to 38dB of ambient noise, studio-tuned 11mm dynamic drivers, and low-latency gaming mode. Features fast wireless charging and crystal-clear triple mic ENC for voice calls.',
    specs: {
      'Bluetooth Version': 'v5.3 Low Energy',
      'Battery Life': '8h single / 36h with case',
      'Driver Size': '11mm Graphene Dynamic',
      'Water Resistance': 'IPX5 Sweat & Splash',
      'Charging Port': 'USB-C + Qi Wireless',
      'Weight': '4.6g per earbud'
    },
    features: [
      'Active Noise Cancellation up to 38dB',
      'Transparency Mode for ambient awareness',
      'Fast charge: 10 mins gives 2.5 hours play',
      'Multipoint Bluetooth connection (2 devices)',
      'Touch controls with haptic feedback'
    ],
    inStock: true,
    stockCount: 38,
    sku: 'AFC-AUD-010',
    warranty: '1 Year Official Brand Warranty'
  },
  {
    id: 'prod-smartwatch-x',
    name: 'Smartwatch Pro X',
    category: 'Smart Devices',
    categorySlug: 'smart-devices',
    price: 149.00,
    originalPrice: 189.00,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Bestseller',
    shortDescription: '1.43-inch Always-on AMOLED display, comprehensive SpO2 & ECG tracking, and 12-day battery life.',
    fullDescription: 'Crafted with aerospace-grade aluminum and sapphire glass, the Smartwatch Pro X is engineered for fitness performance and executive styling. Track heart rate variability, blood oxygen, sleep phases, and 110+ workout modes. Supports Bluetooth calling and smartphone notifications.',
    specs: {
      'Display': '1.43" AMOLED 466x466 (1000 nits)',
      'Case Material': 'Aerospace Aluminum Alloy',
      'Water Resistance': '5ATM / 50m Swim Proof',
      'Battery': '450mAh (Up to 12 days)',
      'Sensors': 'Optical HR, SpO2, ECG, Barometer',
      'Compatibility': 'iOS & Android'
    },
    features: [
      'Crisp Always-On AMOLED Display',
      'Bluetooth phone call answer & mic',
      'Built-in Dual-band GPS tracking',
      '110+ sports & workout tracking modes',
      'Customizable watch faces with widgets'
    ],
    inStock: true,
    stockCount: 22,
    sku: 'AFC-SMT-004',
    warranty: '1 Year Warranty & Free Replacement'
  },
  {
    id: 'prod-portable-speaker',
    name: 'Portable Bluetooth Speaker',
    category: 'Audio',
    categorySlug: 'audio',
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.7,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Sale',
    shortDescription: '360° surround audio with dual passive radiators, IPX7 waterproof rating, and 20-hour playback.',
    fullDescription: 'Fill any room or outdoor gathering with deep bass and articulate highs. The rugged silicone frame and woven fabric grille withstand drops and weather. Pair two units together for true wireless stereo staging.',
    specs: {
      'Output Power': '24W RMS (Dual 12W)',
      'Battery Life': '20 Hours at 60% Volume',
      'Waterproofing': 'IPX7 Fully Submersible',
      'Connectivity': 'Bluetooth 5.3 + 3.5mm AUX',
      'Weight': '580g',
      'Dimensions': '180 x 70 x 70 mm'
    },
    features: [
      'Dual bass radiators for punchy lows',
      'IPX7 submersible waterproof design',
      'TWS pairing for wireless stereo setup',
      'Integrated noise-cancelling speakerphone',
      'Fast USB-C charging'
    ],
    inStock: true,
    stockCount: 45,
    sku: 'AFC-SPK-002',
    warranty: '1 Year Standard Warranty'
  },
  {
    id: 'prod-precision-mouse',
    name: 'Precision Wireless Mouse',
    category: 'Computer Accessories',
    categorySlug: 'computer-accessories',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviewsCount: 178,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Sale',
    shortDescription: 'Ergonomic vertical contour, silent optical switches, 4000 DPI sensor, and dual-mode connectivity.',
    fullDescription: 'Engineered for all-day comfort and high-precision productivity. Seamlessly toggle between up to 3 paired computers via 2.4GHz USB receiver or Bluetooth. Magnetic hyper-fast scroll wheel allows breeze navigation through thousands of lines in seconds.',
    specs: {
      'Sensor': 'Darkfield Optical (200 - 4000 DPI)',
      'Connectivity': '2.4GHz RF + Dual Bluetooth 5.1',
      'Battery': 'Rechargeable Li-Po (70 days per charge)',
      'Buttons': '7 programmable buttons + gesture button',
      'Compatibility': 'Windows, macOS, Linux, iPadOS',
      'Weight': '110g'
    },
    features: [
      'Ultra-quiet click switches reduce 90% sound',
      'Hyper-fast speed-adaptive scroll wheel',
      'USB-C quick charge: 1 min gives 3 hours',
      'Multi-device flow across 3 screens'
    ],
    inStock: true,
    stockCount: 52,
    sku: 'AFC-MOU-008',
    warranty: '1 Year Warranty'
  },
  {
    id: 'prod-power-bank',
    name: 'Fast-Charge Power Bank 20000mAh',
    category: 'Chargers & Cables',
    categorySlug: 'chargers-cables',
    price: 59.99,
    originalPrice: 74.99,
    rating: 4.9,
    reviewsCount: 129,
    image: 'https://images.unsplash.com/photo-1609592424300-84a20b7ba48b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1609592424300-84a20b7ba48b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Bestseller',
    shortDescription: '65W Power Delivery output, charges laptops & phones simultaneously with smart LED numeric display.',
    fullDescription: 'High-density airline-approved 20000mAh battery equipped with GaN charge circuitry. Delivers up to 65W via USB-C to fast-charge MacBook, Dell XPS, iPhone 15/16, and Samsung Galaxy models at maximum rated speeds.',
    specs: {
      'Capacity': '20,000mAh / 74Wh',
      'Max Output': '65W PD 3.0 / QC 4.0+',
      'Ports': '2x USB-C + 1x USB-A Fast Charge',
      'Recharge Time': '1.8 hours with 65W wall adapter',
      'Weight': '395g',
      'Display': 'Digital smart percentage readout'
    },
    features: [
      'Charges high-draw laptops and ultrabooks',
      'Simultaneous 3-device fast charging',
      'Airline flight carry-on certified',
      '12-layer advanced thermal protection'
    ],
    inStock: true,
    stockCount: 30,
    sku: 'AFC-CHG-003',
    warranty: '1 Year Replacement Warranty'
  },
  {
    id: 'prod-usbc-hub',
    name: 'Premium 8-in-1 USB-C Hub',
    category: 'Computer Accessories',
    categorySlug: 'computer-accessories',
    price: 44.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: '4K@60Hz HDMI, 100W PD Pass-through, Gigabit Ethernet, SD/TF card readers, and 3x USB 3.2 ports.',
    fullDescription: 'Encased in an anodized aluminum shell matching modern laptops, this 8-in-1 hub expands your single port into a powerhouse workstation. Delivers crystal clear 4K 60Hz display output without heat throttling.',
    specs: {
      'HDMI Output': '4K @ 60Hz Ultra HD (HDR10)',
      'Power Delivery': 'Up to 100W input / 85W host output',
      'Ethernet': 'RJ45 1000Mbps Gigabit',
      'Data Ports': '2x USB-A 3.2 (5Gbps) + 1x USB-C (5Gbps)',
      'Card Slots': 'UHS-I SD & microSD slots',
      'Material': 'Space Gray Anodized Aluminum'
    },
    features: [
      'Lag-free 4K 60Hz external monitor support',
      'Pass-through high wattage charging',
      'Optimized thermal dissipation heat sink',
      'Braided reinforced flex-cable connector'
    ],
    inStock: true,
    stockCount: 41,
    sku: 'AFC-HUB-001',
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-headphones-wireless',
    name: 'Wireless Studio ANC Headphones',
    category: 'Audio',
    categorySlug: 'audio',
    price: 129.00,
    originalPrice: 169.00,
    rating: 4.9,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Bestseller',
    shortDescription: 'Custom 40mm titanium drivers, adaptive spatial audio, memory-foam ear cushions, and 50-hour battery.',
    fullDescription: 'Immerse yourself in rich, expansive studio acoustics. Hybrid active noise cancellation monitors external noise 380,000 times per second to filter out airplane hum, office chatter, and street traffic.',
    specs: {
      'Acoustic Driver': '40mm Custom Titanium Diaphragm',
      'ANC Performance': 'Up to -42dB Adaptive Noise Filter',
      'Battery Life': '50 Hours (ANC On) / 70 Hours (ANC Off)',
      'Audio Codecs': 'LDAC, AAC, SBC Hi-Res Audio Wireless',
      'Ear Cups': 'Protein leather with memory foam',
      'Weight': '255g'
    },
    features: [
      'Hi-Res Audio Certified Wireless & Wired',
      'Foldable travel design with hard case included',
      'Wear detection: pauses playback when removed',
      'Multipoint pairing for PC + Mobile simultaneously'
    ],
    inStock: true,
    stockCount: 19,
    sku: 'AFC-AUD-005',
    warranty: '1 Year Official Warranty'
  },
  {
    id: 'prod-laptop-stand',
    name: 'Ergonomic Laptop Stand Pro',
    category: 'Computer Accessories',
    categorySlug: 'computer-accessories',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Precision CNC-machined aluminum, stepless angle/height adjustment, and open-back cooling airflow design.',
    fullDescription: 'Elevate your laptop screen to eye level to alleviate neck tension and improve posture. Sturdy dual-damping hinges support laptops up to 17 inches without wobble. Silicone pads protect your machine from scratches.',
    specs: {
      'Material': 'Aerospace 6000-Series Aluminum',
      'Weight Capacity': 'Up to 10kg (22 lbs)',
      'Adjustability': '0 to 180 degrees stepless',
      'Compatibility': 'Laptops from 10" to 17.3"',
      'Dimensions Folded': '265 x 220 x 45 mm',
      'Weight': '780g'
    },
    features: [
      'Heavy-duty alloy hinges withstand rigorous typing',
      'Ventilation cutout accelerates thermal cooling',
      'Folds flat for briefcase portability',
      'Full protective silicone grips'
    ],
    inStock: true,
    stockCount: 60,
    sku: 'AFC-ACC-014',
    warranty: '2 Year Durability Guarantee'
  },
  {
    id: 'prod-flagship-phone',
    name: 'Apex 5G Flagship Smartphone',
    category: 'Smartphones',
    categorySlug: 'smartphones',
    price: 799.00,
    originalPrice: 899.00,
    rating: 4.9,
    reviewsCount: 304,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'New',
    shortDescription: 'Snapdragon 8 Gen 3, 200MP Quad Camera with Periscope Zoom, 6.8" 120Hz LTPO AMOLED, 5000mAh.',
    fullDescription: 'The ultimate mobile powerhouse. Featuring an edge-to-edge dynamic AMOLED display with 2600 nits peak brightness, next-gen computational night photography, and 100W hyper-fast wired charging.',
    specs: {
      'Processor': 'Snapdragon 8 Gen 3 (4nm)',
      'RAM / Storage': '16GB LPDDR5X / 512GB UFS 4.0',
      'Main Camera': '200MP OIS + 50MP UltraWide + 50MP Periscope 5x',
      'Display': '6.8" QHD+ LTPO 1-120Hz AMOLED',
      'Battery': '5000mAh Dual-Cell (100W wired / 50W wireless)',
      'OS': 'Android 15 with 5 Years OS Upgrades'
    },
    features: [
      'Unmatched 200MP crystal photography',
      'Corning Gorilla Armor anti-reflective glass',
      'IP68 dust and water immersion proof',
      'Dual stereo speakers tuned by AKG'
    ],
    inStock: true,
    stockCount: 14,
    sku: 'AFC-MOB-001',
    warranty: '1 Year Official PTA Approved Brand Warranty'
  },
  {
    id: 'prod-pro-laptop',
    name: 'AeroBook Pro 16" Workstation',
    category: 'Laptops',
    categorySlug: 'laptops',
    price: 1399.00,
    originalPrice: 1549.00,
    rating: 5.0,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Bestseller',
    shortDescription: '16-core CPU, RTX 4070 GPU, 32GB RAM, 1TB NVMe, 3.2K 165Hz mini-LED display with 100% DCI-P3.',
    fullDescription: 'Designed for video editors, 3D artists, software architects, and gamers. Aluminum unibody construction provides rigid durability while weighing only 1.95kg. Vapor chamber cooling keeps components running cool under peak sustained load.',
    specs: {
      'CPU': 'Intel Core i9 14th Gen (16-Core / 24-Thread)',
      'GPU': 'NVIDIA GeForce RTX 4070 8GB GDDR6',
      'Display': '16.0" 3.2K (3200x2000) 165Hz Mini-LED 1200 nits',
      'Memory': '32GB DDR5 5600MHz',
      'Storage': '1TB PCIe 4.0 NVMe SSD (Expandable slot)',
      'Battery': '99.9Wh (Max flight limit) with 200W GaN Adapter'
    },
    features: [
      'Spectacular 1200-nit Mini-LED studio screen',
      'Whisper-quiet dual vapor chamber fans',
      'Glass multi-touch precision trackpad',
      'Full I/O: HDMI 2.1, SD Express, Thunderbolt 4'
    ],
    inStock: true,
    stockCount: 8,
    sku: 'AFC-LAP-002',
    warranty: '2 Years Manufacturer International Warranty'
  },
  {
    id: 'prod-mechanical-keyboard',
    name: 'CyberTactile RGB Mechanical Keyboard',
    category: 'Gaming',
    categorySlug: 'gaming',
    price: 94.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewsCount: 153,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'New',
    shortDescription: 'Gasket-mount structure, hot-swappable tactile pre-lubed switches, PBT keycaps, and triple connectivity.',
    fullDescription: 'Experience typing bliss with our custom acoustic dampened gasket keyboard. Factory-lubed linear switches deliver a deep marbly sound profile without rattling. Per-key RGB with customizable macro software.',
    specs: {
      'Form Factor': '75% Compact (82 Keys + Metal Rotary Knob)',
      'Switch Type': 'Hot-Swappable Custom Pre-Lubed Linear',
      'Keycaps': 'Double-Shot PBT Cherry Profile',
      'Battery': '4000mAh (Up to 200 hours RGB off)',
      'Connectivity': 'Bluetooth 5.0, 2.4GHz Dongle, USB-C',
      'Weight': '980g'
    },
    features: [
      '5-layer acoustic sound dampening foams',
      'Custom aluminum volume / mute scroll knob',
      'Compatible with 3-pin and 5-pin mechanical switches',
      'Dynamic per-key RGB backlighting with 22 effects'
    ],
    inStock: true,
    stockCount: 26,
    sku: 'AFC-KEY-007',
    warranty: '1 Year Warranty'
  },
  {
    id: 'prod-magsafe-charger',
    name: '3-in-1 Magnetic Wireless Charging Station',
    category: 'Chargers & Cables',
    categorySlug: 'chargers-cables',
    price: 49.99,
    originalPrice: 65.00,
    rating: 4.7,
    reviewsCount: 77,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Simultaneous fast wireless charging for Smartphone, Smartwatch, and Wireless Earbuds in one sleek stand.',
    fullDescription: 'Declutter your nightstand and desk. Strong neodymium magnets snap your phone firmly in portrait or landscape mode while delivering high-speed Qi-certified wireless power with over-temperature protection.',
    specs: {
      'Phone Output': '15W Max Magnetic Fast Charge',
      'Watch Output': '3W Fast Apple/WearOS Watch module',
      'Earbuds Output': '5W Qi Wireless base',
      'Input': '9V/3A USB-C (30W GaN adapter included)',
      'Material': 'Zinc alloy base with silicone touchpads'
    },
    features: [
      'Charges 3 devices using 1 single wall plug',
      'Floating magnetic stand with angle adjustment',
      'Subtle sleep-friendly LED indicator',
      'Includes 30W high-speed GaN wall adapter'
    ],
    inStock: true,
    stockCount: 35,
    sku: 'AFC-CHG-012',
    warranty: '1 Year Warranty'
  }
];
