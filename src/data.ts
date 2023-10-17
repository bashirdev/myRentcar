import { Car, SLiderType } from "./types/type";

export const sliderData:SLiderType[]=[
  {
    id:'1',
    bgImage:'/assets/img/slider1.jpg',
    title:'CHEAP CAR RENTAL IN YOUR DESIRED DESTINATION',
    description:'One of our top priorities is to adjust each package we offer to our customer’s exact needs. Rental Cars / Bike / Jeeps'
  },
  {
    id:'2',
    bgImage:'/assets/img/slider2.png',
    title:'DRIVE SAFELY WITH US IN YOUR DESIRED DESTINATION',
    description:'One of our top priorities is to adjust each package we offer to our customer’s exact needs. Rental Cars / Bike / Jeeps'
  },
  {
    id:'3',
    bgImage:'/assets/img/slider3.jpg',
    title:'NEW CAR RENTAL IN YOUR DESIRED DESTINATION',
    description:'One of our top priorities is to adjust each package we offer to our customer’s exact needs. Rental Cars / Bike / Jeeps'
  },
]

const dummyCars: Car[] = [
  {
    id:'1',
    carName: "Toyota Camry",
    carModel: "2022",
    engineCC: 2500,
    perDayPrice: 60,
    year: 2022,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity: 5,
    mileage: 30,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c1.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'2',
    carName: "Toyota Camry",
    carModel: "2022",
    engineCC: 2500,
    perDayPrice: 60,
    year: 2022,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity: 5,
    mileage: 30,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c2.png", "/assets/img/c4.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 3.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 2.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'3',
    carName: "Toyota Camry",
    carModel: "2022",
    engineCC: 2500,
    perDayPrice: 60,
    year: 2022,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity: 5,
    mileage: 30,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c3.png", "/assets/img/c4.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 3,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  
  {
    id:'4',
    carName: "Toyota Camry",
    carModel: "2022",
    engineCC: 2500,
    perDayPrice: 60,
    year: 2022,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity: 5,
    mileage: 30,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c4.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'5',
    carName: "BMW",
    carModel: "2022",
    engineCC: 3000,
    perDayPrice: 80,
    year: 2020,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:5,
    mileage: 20,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c4.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 3.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'6',
    carName: "Nissan",
    carModel: "2015",
    engineCC: 1600,
    perDayPrice: 80,
    year: 1600,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c6.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'7',
    carName: "Mazda",
    carModel: "2018",
    engineCC: 1800,
    perDayPrice: 40,
    year: 1600,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c6.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'8',
    carName: "Ford",
    carModel: "2018",
    engineCC: 1600,
    perDayPrice: 20,
    year: 1600,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c8.png", "/assets/img/c1.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'9',
    carName: "Nissan Sunny",
    carModel: "2019",
    engineCC: 1600,
    perDayPrice:15,
    year: 1500,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c5.png", "/assets/img/c1.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'10',
    carName: "Ford",
    carModel: "2018",
    engineCC: 1500,
    perDayPrice: 20,
    year: 1500,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c8.png", "/assets/img/c1.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'11',
    carName: "Nissan Sunny",
    carModel: "2019",
    engineCC: 1600,
    perDayPrice:15,
    year: 1500,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c5.png", "/assets/img/c1.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'12',
    carName: "Mazda",
    carModel: "2018",
    engineCC: 1800,
    perDayPrice: 40,
    year: 1600,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c6.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: "Very comfortable seats.",
          },
        ],
      },
    ],
  },
  {
    id:'13',
    carName: "BMW",
    carModel: "2022",
    engineCC: 3000,
    perDayPrice: 80,
    year: 2020,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:5,
    mileage: 20,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c8.png", "/assets/img/c4.png"],
    location: "Downtown Branch",
    availabilityStatus: false,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 3.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },
  {
    id:'14',
    carName: "Mazda",
    carModel: "2018",
    engineCC: 1800,
    perDayPrice: 40,
    year: 1600,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    seatingCapacity:4,
    mileage: 60,
    features: ["GPS", "Bluetooth", "Leather Seats"],
    imageURLs: ["/assets/img/c6.png", "/assets/img/c8.png"],
    location: "Downtown Branch",
    availabilityStatus: true,
    insuranceInfo: {
      provider: "XYZ Insurance",
      coverageType: "Comprehensive",
    },
    owner: {
      name: "John Doe",
      contact: "johndoe@example.com",
    },
    bookings: [
      {
        bookingDate: new Date("2023-10-15"),
        returnDate: new Date("2023-10-20"),
        reviews: [
          {
            username: "User1",
            rating: 4.5,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
          {
            username: "User2",
            rating: 4.0,
            comment: `"Renting a car from [Car Rental Service Name] was an exceptional experience. The process was seamless, and the quality of the vehicles provided exceeded my expectations. The car was clean, well-maintained, and delivered to my location on time.

            The customer service team was incredibly helpful, answering all of my questions and guiding me through the rental process. Their flexibility in terms of pick-up and drop-off times made my trip stress-free.
            
            I appreciated the transparent pricing and no hidden fees. "`,
          },
        ],
      },
    ],
  },

  // ... Add more car objects as needed
];

export default dummyCars;
