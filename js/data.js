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
  },
  {
    "id": "car-7",
    "make": "Mahindra",
    "model": "Thar LX 4x4 Diesel AT",
    "year": 2023,
    "priceLakh": 14.75,
    "mileage": 18400,
    "fuel": "Diesel",
    "engineCc": 2184,
    "seats": 4,
    "gearbox": "6-speed torque converter",
    "hub": "Bellandur Hub",
    "features": [
      "Four-wheel Drive",
      "Hard Top",
      "Cruise Control",
      "Touchscreen Infotainment"
    ],
    "description": "An adventure-ready three-door SUV with a diesel automatic powertrain, four-wheel drive and a compact four-seat cabin. A distinctive choice for weekend escapes.",
    "photos": [
      {
        "src": "assets/cars/car-7-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_(Ank_Kumar%2C_Infosys_limited)_02.jpg",
        "author": "Ank Kumar ",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 1",
        "alt": "Mahindra Thar LX 4x4 Diesel AT — reference exterior 1"
      },
      {
        "src": "assets/cars/car-7-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_(Ank_Kumar%2C_Infosys_limited)_03.jpg",
        "author": "Ank Kumar ",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 2",
        "alt": "Mahindra Thar LX 4x4 Diesel AT — reference exterior 2"
      }
    ],
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "SUV",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-7-1.jpg"
  },
  {
    "id": "car-8",
    "make": "Jeep",
    "model": "Compass Limited 1.4 Petrol AT",
    "year": 2018,
    "priceLakh": 9.85,
    "mileage": 48600,
    "fuel": "Petrol",
    "engineCc": 1368,
    "seats": 5,
    "gearbox": "7-speed dual-clutch automatic",
    "hub": "Indiranagar Hub",
    "features": [
      "Turbo Petrol Engine",
      "Dual-zone Climate Control",
      "Touchscreen Infotainment",
      "Alloy Wheels"
    ],
    "description": "A five-seat SUV with a turbo-petrol engine and dual-clutch automatic gearbox. Its comfortable cabin and practical luggage space suit city commutes and longer trips.",
    "photos": [
      {
        "src": "assets/cars/car-8-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Jeep-compass-2018-petrol-at-limited-india-front.jpg",
        "author": "Sim tcr",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 1",
        "alt": "Jeep Compass Limited 1.4 Petrol AT — reference exterior 1"
      },
      {
        "src": "assets/cars/car-8-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Jeep-compass-2018-petrol-at-limited-india-back.jpg",
        "author": "Sim tcr",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 2",
        "alt": "Jeep Compass Limited 1.4 Petrol AT — reference exterior 2"
      },
      {
        "src": "assets/cars/car-8-3.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Jeep-compass-2018-petrol-at-limited-india-dashboard.jpg",
        "author": "Sim tcr",
        "licence": "CC BY-SA 4.0",
        "label": "Interior",
        "alt": "Jeep Compass Limited 1.4 Petrol AT — reference interior"
      }
    ],
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "SUV",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-8-1.jpg"
  },
  {
    "id": "car-9",
    "make": "Jeep",
    "model": "Wrangler Unlimited 2.0 AT",
    "year": 2024,
    "priceLakh": 58.5,
    "mileage": 12600,
    "fuel": "Petrol",
    "engineCc": 1995,
    "seats": 5,
    "gearbox": "8-speed automatic",
    "hub": "Koramangala Hub",
    "features": [
      "Four-wheel Drive",
      "Removable Hard Top",
      "Turbo Petrol Engine",
      "Cruise Control"
    ],
    "description": "The iconic five-door Wrangler combines a turbo-petrol automatic powertrain with four-wheel drive and a removable hard top. Built around outdoor adventures with room for five.",
    "photos": [
      {
        "src": "assets/cars/car-9-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2024_Jeep_Wrangler%2C_front_NYIAS_2023.jpg",
        "author": "Kevauto",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 1",
        "alt": "Jeep Wrangler Unlimited 2.0 AT — reference exterior 1"
      },
      {
        "src": "assets/cars/car-9-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2024_Jeep_Wrangler%2C_rear_NYIAS_2023.jpg",
        "author": "Kevauto",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 2",
        "alt": "Jeep Wrangler Unlimited 2.0 AT — reference exterior 2"
      }
    ],
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "SUV",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-9-1.jpg"
  },
  {
    "id": "car-10",
    "make": "Jeep",
    "model": "Grand Cherokee Limited 2.0 AT",
    "year": 2023,
    "priceLakh": 54.9,
    "mileage": 22300,
    "fuel": "Petrol",
    "engineCc": 1995,
    "seats": 5,
    "gearbox": "8-speed automatic",
    "hub": "Bellandur Hub",
    "features": [
      "Four-wheel Drive",
      "Panoramic Sunroof",
      "Leather Upholstery",
      "Dual-zone Climate Control"
    ],
    "description": "A spacious premium five-seat SUV with a turbo-petrol automatic powertrain. A refined cabin, generous luggage space and four-wheel drive make it well suited to family touring.",
    "photos": [
      {
        "src": "assets/cars/car-10-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2022_Jeep_Grand_Cherokee_Summit_Reserve_4x4_in_Bright_White%2C_Front_Left%2C_01-16-2022.jpg",
        "author": "Elise240SX",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 1",
        "alt": "Jeep Grand Cherokee Limited 2.0 AT — reference exterior 1"
      },
      {
        "src": "assets/cars/car-10-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2022_Jeep_Grand_Cherokee_Summit_Reserve_4x4_in_Bright_White%2C_Rear_Left%2C_01-16-2022.jpg",
        "author": "Elise240SX",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 2",
        "alt": "Jeep Grand Cherokee Limited 2.0 AT — reference exterior 2"
      }
    ],
    "trans": "Automatic",
    "owners": "1st Owner",
    "body": "SUV",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-10-1.jpg"
  },
  {
    "id": "car-11",
    "make": "Toyota",
    "model": "Innova Crysta 2.4 ZX",
    "year": 2022,
    "priceLakh": 23.75,
    "mileage": 32400,
    "fuel": "Diesel",
    "trans": "Manual",
    "engineCc": 2393,
    "seats": 7,
    "body": "MPV",
    "gearbox": "5-speed manual",
    "hub": "Bellandur Hub",
    "features": [
      "Seven Seats",
      "Second-row Captain Seats",
      "Automatic Climate Control",
      "Rear Parking Camera"
    ],
    "description": "A spacious seven-seat MPV with a diesel engine and comfortable captain seats in the second row. A practical choice for family journeys and travelling with luggage.",
    "photos": [
      {
        "src": "assets/cars/car-11-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Toyota_Kijang_Innova_2.0_V_Luxury_(front)%2C_Citraland%2C_West_Surabaya.jpg",
        "author": "Alex Neman",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 1",
        "alt": "Toyota Innova Crysta 2.4 ZX — reference exterior 1"
      },
      {
        "src": "assets/cars/car-11-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Toyota_Kijang_Innova_2.0_V_Luxury_(rear)%2C_Citraland%2C_West_Surabaya.jpg",
        "author": "Alex Neman",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 2",
        "alt": "Toyota Innova Crysta 2.4 ZX — reference exterior 2"
      }
    ],
    "owners": "1st Owner",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-11-1.jpg"
  },
  {
    "id": "car-12",
    "make": "Mercedes-Benz",
    "model": "GLE 350d 4MATIC",
    "year": 2018,
    "priceLakh": 37.5,
    "mileage": 48600,
    "fuel": "Diesel",
    "trans": "Automatic",
    "engineCc": 2987,
    "seats": 5,
    "body": "SUV",
    "gearbox": "9G-TRONIC 9-speed automatic",
    "hub": "Indiranagar Hub",
    "features": [
      "V6 Diesel Engine",
      "4MATIC All-wheel Drive",
      "Electric Front Seats",
      "Dual-zone Climate Control"
    ],
    "description": "A premium five-seat SUV with a V6 diesel engine, nine-speed automatic gearbox and 4MATIC all-wheel drive. Its roomy cabin is designed for relaxed everyday driving and long-distance comfort.",
    "photos": [
      {
        "src": "assets/cars/car-12-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2016_Mercedes-Benz_GLE_250_Diesel_4MATIC_AMG_Line_Premium_2.1_Front.jpg",
        "author": "Vauxford",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 1",
        "alt": "Mercedes-Benz GLE 350d 4MATIC — reference exterior 1"
      },
      {
        "src": "assets/cars/car-12-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2016_Mercedes-Benz_GLE_250_Diesel_4MATIC_AMG_Line_Premium_2.1_Rear.jpg",
        "author": "Vauxford",
        "licence": "CC BY-SA 4.0",
        "label": "Exterior 2",
        "alt": "Mercedes-Benz GLE 350d 4MATIC — reference exterior 2"
      },
      {
        "src": "assets/cars/car-12-3.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2016_Mercedes-Benz_GLE_350_d_(W_166)_wagon_(2016-03-05)_03.jpg",
        "author": "EurovisionNim",
        "licence": "CC BY-SA 4.0",
        "label": "Interior",
        "alt": "Mercedes-Benz GLE 350d 4MATIC — reference interior"
      }
    ],
    "owners": "1st Owner",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-12-1.jpg"
  },
  {
    "id": "car-13",
    "make": "Toyota",
    "model": "Fortuner 2.8 4x4 AT",
    "year": 2022,
    "priceLakh": 35.9,
    "mileage": 28700,
    "fuel": "Diesel",
    "trans": "Automatic",
    "engineCc": 2755,
    "seats": 7,
    "body": "SUV",
    "gearbox": "6-speed automatic",
    "hub": "Koramangala Hub",
    "features": [
      "Four-wheel Drive",
      "Seven Seats",
      "Paddle Shifters",
      "Cruise Control"
    ],
    "description": "A seven-seat diesel SUV with a commanding driving position, automatic transmission and four-wheel drive. Flexible seating makes it a versatile option for family trips and weekend travel.",
    "photos": [
      {
        "src": "assets/cars/car-13-1.png",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Toyota_Fortuner_4.0_SRV_4x4_(Colombia)_front_view.png",
        "author": "Autosdeprimera",
        "licence": "CC BY 3.0",
        "label": "Exterior 1",
        "alt": "Toyota Fortuner 2.8 4x4 AT — reference exterior 1"
      },
      {
        "src": "assets/cars/car-13-2.png",
        "source": "https://commons.wikimedia.org/wiki/File:2021_Toyota_Fortuner_4.0_SRV_4x4_(Colombia)_rear_view_01.png",
        "author": "Autosdeprimera",
        "licence": "CC BY 3.0",
        "label": "Exterior 2",
        "alt": "Toyota Fortuner 2.8 4x4 AT — reference exterior 2"
      }
    ],
    "owners": "1st Owner",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-13-1.png"
  },
  {
    "id": "car-14",
    "make": "BMW",
    "model": "M5 Competition Sedan",
    "year": 2019,
    "priceLakh": 82.5,
    "mileage": 21800,
    "fuel": "Petrol",
    "trans": "Automatic",
    "engineCc": 4395,
    "seats": 5,
    "body": "Sedan",
    "gearbox": "8-speed M Steptronic automatic",
    "hub": "Indiranagar Hub",
    "features": [
      "4.4-litre Twin-turbo V8",
      "M xDrive All-wheel Drive",
      "M Sport Seats",
      "Adaptive M Suspension"
    ],
    "description": "A high-performance four-door sedan combining a twin-turbo V8 with M xDrive and an eight-speed automatic gearbox. Five-seat practicality meets a driver-focused cabin and adjustable performance settings.",
    "photos": [
      {
        "src": "assets/cars/car-14-1.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2019_BMW_M5_Competition_in_Silver%2C_front_right_(US).jpg",
        "author": "Mr.choppers",
        "licence": "CC BY-SA 3.0",
        "label": "Exterior 1",
        "alt": "BMW M5 Competition Sedan — reference exterior 1"
      },
      {
        "src": "assets/cars/car-14-2.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:2018_BMW_M5_Competition_in_Alpinwei%C3%9F%2C_rear_left.jpg",
        "author": "Mr.choppers",
        "licence": "CC BY-SA 3.0",
        "label": "Exterior 2",
        "alt": "BMW M5 Competition Sedan — reference exterior 2"
      }
    ],
    "owners": "1st Owner",
    "badge": "Sample listing",
    "score": "Not inspected",
    "registration": "Karnataka",
    "image": "assets/cars/car-14-1.jpg"
  }
];
