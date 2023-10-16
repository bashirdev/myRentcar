type Review = {
  username: string;
  rating: number;
  comment?: string;
};

type InsuranceInfo = {
  provider: string;
  coverageType: string;
};

type Owner = {
  name: string;
  contact: string;
};

 type Booking = {
  bookingDate: Date;
  returnDate: Date;
  reviews: Review[];
};

export type Car = {
  id:string,
  carName: string;
  carModel: string;
  engineCC: number;
  perDayPrice: number;
  year: number;
  fuelType: string;
  transmissionType: string;
  seatingCapacity: number;
  mileage: number;
  features: string[];
  imageURLs: string[];
  location: string;
  availabilityStatus: boolean;
  insuranceInfo: InsuranceInfo;
  owner: Owner;
  bookings: Booking[];
};



export type SLiderType={
   id:string;
   bgImage:string;
   title:string;
   description:string
}