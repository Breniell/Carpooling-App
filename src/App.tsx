import React, { useState } from 'react';
import { Car, Users, Star, Clock } from 'lucide-react';
import SearchBar from './components/SearchBar';
import TripCard from './components/TripCard';
import type { Trip } from './types';

const SAMPLE_TRIPS: Trip[] = [
  {
    id: '1',
    driver: {
      id: '1',
      name: 'Sophie Martin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 4.8,
      verified: true
    },
    origin: 'Paris',
    destination: 'Lyon',
    date: '2024-03-20',
    price: 25,
    seats: 4,
    availableSeats: 3
  },
  {
    id: '2',
    driver: {
      id: '2',
      name: 'Thomas Bernard',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 4.6,
      verified: true
    },
    origin: 'Marseille',
    destination: 'Nice',
    date: '2024-03-21',
    price: 20,
    seats: 3,
    availableSeats: 2
  }
];

function App() {
  const [trips] = useState<Trip[]>(SAMPLE_TRIPS);

  const handleBooking = (tripId: string) => {
    console.log('Booking trip:', tripId);
    // Implement booking logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-8">
            <Car size={40} />
            <h1 className="text-4xl font-bold ml-4">CoVoiture</h1>
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
            Travel together, save together
          </h2>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Available Trips */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8">Available Trips</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onBook={handleBooking} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">Why Choose CoVoiture?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Trusted Community</h3>
              <p className="text-gray-600">Join our verified community of drivers and passengers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Rated Drivers</h3>
              <p className="text-gray-600">Choose from our highly rated and experienced drivers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Find trips that match your schedule perfectly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;