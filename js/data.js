// Illustrative inventory. Reference photos may differ in trim, colour and year.
const CAR_DATABASE = [
  {
    "id": "car-1",
    "make": "Hyundai",
    "model": "Creta SX (O) 1.5 CRDi",
    "year": 2022,
    "priceLakh": 14.85,
    "emi": "₹24,800/mo",
    "mileage": 28400,
    "fuel": "Diesel",
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "SUV",
    "hub": "Koramangala Hub",
    "badge": "Inspected",
    "score": "9.6/10",
    "image": "assets/cars/car-1-1.jpg",
    "features": [
      "Panoramic Sunroof",
      "Ventilated Front Seats",
      "DealerDrive Assured",
      "Bose 8-Speaker Audio"
    ],
    "engineCc": 1493,
    "seats": 5,
    "gearbox": "6-speed torque converter",
    "description": "A comfortable diesel SUV for daily commutes and longer family journeys. The spacious cabin pairs everyday practicality with premium comfort features.",
    "registration": "Karnataka",
    "photos": [
      {
        "src": "assets/cars/car-1-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Hyundai_Creta_SX(O)_CRDi_(India)_front_view.jpg",
        "author": "Dairokkan9",
        "licence": "CC BY-SA 4.0",
        "label": "Front view",
        "alt": "Hyundai Creta SX (O) 1.5 CRDi — reference front view"
      },
      {
        "src": "assets/cars/car-1-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Hyundai_Creta_1.5_Value_(Chile)_rear_view.jpg",
        "author": "RL GNZLZ",
        "licence": "CC BY-SA 2.0",
        "label": "Rear view",
        "alt": "Hyundai Creta SX (O) 1.5 CRDi — reference rear view"
      }
    ]
  },
  {
    "id": "car-2",
    "make": "Honda",
    "model": "City ZX CVT i-VTEC",
    "year": 2022,
    "priceLakh": 12.35,
    "emi": "₹20,600/mo",
    "mileage": 29800,
    "fuel": "Petrol",
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "Sedan",
    "hub": "Indiranagar Hub",
    "badge": "Assured",
    "score": "9.7/10",
    "image": "assets/cars/car-2-1.jpg",
    "features": [
      "LaneWatch Camera",
      "Electric Sunroof",
      "Full LED Headlamps",
      "Ivory Leather Upholstery"
    ],
    "engineCc": 1498,
    "seats": 5,
    "gearbox": "CVT",
    "description": "A spacious petrol sedan with a smooth automatic gearbox, comfortable rear seating and a generous boot for weekend luggage.",
    "registration": "Karnataka",
    "photos": [
      {
        "src": "assets/cars/car-2-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2022_Honda_City_1.5_GN2_(20220317)_01.jpg",
        "author": "オーバードライブ83",
        "licence": "CC BY-SA 4.0",
        "label": "Front view",
        "alt": "Honda City ZX CVT i-VTEC — reference front view"
      },
      {
        "src": "assets/cars/car-2-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Honda_City_1.5_EX_2022_(rear).jpg",
        "author": "RL GNZLZ from Chile",
        "licence": "CC BY-SA 2.0",
        "label": "Rear view",
        "alt": "Honda City ZX CVT i-VTEC — reference rear view"
      }
    ]
  },
  {
    "id": "car-3",
    "make": "Mahindra",
    "model": "XUV700 AX7 L Diesel AT",
    "year": 2023,
    "priceLakh": 21.4,
    "emi": "₹35,900/mo",
    "mileage": 24500,
    "fuel": "Diesel",
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "SUV",
    "hub": "Bellandur Hub",
    "badge": "Certified",
    "score": "9.5/10",
    "image": "assets/cars/car-3-1.png",
    "features": [
      "ADAS Level 2",
      "Panoramic Skyroof",
      "Sony 3D 12-Speaker Audio",
      "360° Surround View"
    ],
    "engineCc": 2198,
    "seats": 7,
    "gearbox": "6-speed torque converter",
    "description": "A roomy seven-seat SUV with a diesel automatic powertrain and a feature-rich cabin for family travel.",
    "registration": "Karnataka",
    "photos": [
      {
        "src": "assets/cars/car-3-1.png",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Mahindra_XUV700_2.2_AX7_(India)_front_view.png",
        "author": "DriveSpark",
        "licence": "CC BY 3.0",
        "label": "Front view",
        "alt": "Mahindra XUV700 AX7 L Diesel AT — reference front view"
      },
      {
        "src": "assets/cars/car-3-2.png",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Mahindra_XUV700_2.2_AX7_(India)_rear_view.png",
        "author": "DriveSpark",
        "licence": "CC BY 3.0",
        "label": "Rear view",
        "alt": "Mahindra XUV700 AX7 L Diesel AT — reference rear view"
      },
      {
        "src": "assets/cars/car-3-3.png",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Mahindra_XUV700_2.2_AX7_(India)_interior.png",
        "author": "DriveSpark",
        "licence": "CC BY 3.0",
        "label": "Interior",
        "alt": "Mahindra XUV700 AX7 L Diesel AT — reference interior"
      }
    ]
  },
  {
    "id": "car-4",
    "make": "Maruti Suzuki",
    "model": "Baleno Alpha 1.2",
    "year": 2022,
    "priceLakh": 7.65,
    "mileage": 21800,
    "fuel": "Petrol",
    "trans": "Manual",
    "owners": "1st Owner",
    "body": "Hatchback",
    "hub": "Indiranagar Hub",
    "badge": "Sample listing",
    "score": "9.4/10",
    "features": [
      "Head-up Display",
      "360° Camera",
      "SmartPlay Pro+ Touchscreen",
      "Automatic Climate Control"
    ],
    "engineCc": 1197,
    "seats": 5,
    "gearbox": "5-speed manual",
    "description": "An easy-to-park premium hatchback with a roomy cabin and useful technology for everyday city driving.",
    "registration": "Karnataka",
    "image": "assets/cars/car-4-1.jpg",
    "photos": [
      {
        "src": "assets/cars/car-4-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2022_Maruti_Suzuki_Baleno_Alpha_(India)_front_view_02.jpg",
        "author": "DriveSpark",
        "licence": "CC BY 3.0",
        "label": "Front view",
        "alt": "Maruti Suzuki Baleno Alpha 1.2 — reference front view"
      },
      {
        "src": "assets/cars/car-4-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2022_Maruti_Suzuki_Baleno_Alpha_(India)_rear_view.jpg",
        "author": "DriveSpark",
        "licence": "CC BY 3.0",
        "label": "Rear view",
        "alt": "Maruti Suzuki Baleno Alpha 1.2 — reference rear view"
      },
      {
        "src": "assets/cars/car-4-3.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2022_Maruti_Suzuki_Baleno_Alpha_(India)_interior.jpg",
        "author": "DriveSpark",
        "licence": "CC BY 3.0",
        "label": "Interior",
        "alt": "Maruti Suzuki Baleno Alpha 1.2 — reference interior"
      }
    ]
  },
  {
    "id": "car-5",
    "make": "Maruti Suzuki",
    "model": "Swift ZXi 1.2",
    "year": 2021,
    "priceLakh": 6.25,
    "mileage": 32600,
    "fuel": "Petrol",
    "trans": "Manual",
    "owners": "1st Owner",
    "body": "Hatchback",
    "hub": "Koramangala Hub",
    "badge": "Sample listing",
    "score": "9.3/10",
    "features": [
      "Alloy Wheels",
      "Push-button Start",
      "Automatic Climate Control",
      "Steering-mounted Controls"
    ],
    "engineCc": 1197,
    "seats": 5,
    "gearbox": "5-speed manual",
    "description": "A compact, nimble hatchback with a light footprint for urban commutes and an engaging manual gearbox.",
    "registration": "Karnataka",
    "image": "assets/cars/car-5-1.jpg",
    "photos": [
      {
        "src": "assets/cars/car-5-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Front.jpg",
        "author": "Vauxford",
        "licence": "CC BY-SA 4.0",
        "label": "Front view",
        "alt": "Maruti Suzuki Swift ZXi 1.2 — reference front view"
      },
      {
        "src": "assets/cars/car-5-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Rear.jpg",
        "author": "Vauxford",
        "licence": "CC BY-SA 4.0",
        "label": "Rear view",
        "alt": "Maruti Suzuki Swift ZXi 1.2 — reference rear view"
      }
    ]
  },
  {
    "id": "car-6",
    "make": "Tata",
    "model": "Nexon XZ+ 1.2",
    "year": 2022,
    "priceLakh": 9.45,
    "mileage": 26700,
    "fuel": "Petrol",
    "trans": "Manual",
    "owners": "1st Owner",
    "body": "SUV",
    "hub": "Bellandur Hub",
    "badge": "Sample listing",
    "score": "9.5/10",
    "features": [
      "Turbo Petrol Engine",
      "Multi-drive Modes",
      "Rear Parking Camera",
      "Automatic Climate Control"
    ],
    "engineCc": 1199,
    "seats": 5,
    "gearbox": "6-speed manual",
    "description": "A compact turbo-petrol SUV with an elevated driving position and versatile space for daily errands and weekend trips.",
    "registration": "Karnataka",
    "image": "assets/cars/car-6-1.jpg",
    "photos": [
      {
        "src": "assets/cars/car-6-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2023_Tata_Nexon_XZA%2B_front_view.jpg",
        "author": "Dairokkan9",
        "licence": "CC BY-SA 4.0",
        "label": "Front view",
        "alt": "Tata Nexon XZ+ 1.2 — reference front view"
      },
      {
        "src": "assets/cars/car-6-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2023_Tata_Nexon_XZA%2B_rear_view.jpg",
        "author": "Dairokkan9",
        "licence": "CC BY-SA 4.0",
        "label": "Rear view",
        "alt": "Tata Nexon XZ+ 1.2 — reference rear view"
      }
    ]
  }
];
