export interface User {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  verified: boolean;
  email: string;
  phone?: string;
  bio?: string;
  vehicleInfo?: VehicleInfo;
  reviews: Review[];
}

export interface VehicleInfo {
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  comfort: 'basic' | 'comfortable' | 'luxury';
}

export interface Trip {
  id: string;
  driver: User;
  origin: string;
  destination: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seats: number;
  availableSeats: number;
  stops: string[];
  rules: string[];
  description?: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface Booking {
  id: string;
  trip: Trip;
  passenger: User;
  seats: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  bookingDate: string;
  totalPrice: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
}

export interface Review {
  id: string;
  author: User;
  recipient: User;
  rating: number;
  comment: string;
  date: string;
  tripId: string;
}

export interface Message {
  id: string;
  sender: User;
  recipient: User;
  content: string;
  timestamp: string;
  read: boolean;
  tripId?: string;
}