import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import type { Trip } from '../types';

interface TripCardProps {
  trip: Trip;
  onBook: (tripId: string) => void;
}

export default function TripCard({ trip, onBook }: TripCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={trip.driver.avatar}
            alt={trip.driver.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{trip.driver.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm">{trip.driver.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-blue-600">€{trip.price}</span>
          <p className="text-sm text-gray-500">per seat</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-blue-600"></div>
          <p className="flex-1">{trip.origin}</p>
          <Clock size={16} className="text-gray-400" />
          <time className="text-sm text-gray-600">08:00</time>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-blue-600"></div>
          <p className="flex-1">{trip.destination}</p>
          <Clock size={16} className="text-gray-400" />
          <time className="text-sm text-gray-600">10:30</time>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          <Users size={18} />
          <span>{trip.availableSeats} seats available</span>
        </div>
        <button
          onClick={() => onBook(trip.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Book now
        </button>
      </div>
    </div>
  );
}