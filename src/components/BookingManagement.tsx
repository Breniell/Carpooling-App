import React from 'react';
import { Calendar, Clock, MapPin, User, AlertCircle } from 'lucide-react';
import type { Booking } from '../types';

interface BookingManagementProps {
  bookings: Booking[];
  onCancelBooking: (bookingId: string) => void;
}

export default function BookingManagement({ bookings, onCancelBooking }: BookingManagementProps) {
  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Bookings</h2>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option value="all">All Bookings</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                {/* Trip Info */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{booking.trip.origin} → {booking.trip.destination}</div>
                    <div className="text-sm text-gray-500">
                      <Calendar className="inline-block mr-1" size={14} />
                      {booking.trip.date}
                      <Clock className="inline-block ml-3 mr-1" size={14} />
                      {booking.trip.departureTime}
                    </div>
                  </div>
                </div>

                {/* Driver Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={booking.trip.driver.avatar}
                    alt={booking.trip.driver.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{booking.trip.driver.name}</div>
                    <div className="text-sm text-gray-500">
                      <User className="inline-block mr-1" size={14} />
                      {booking.seats} {booking.seats === 1 ? 'seat' : 'seats'} booked
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and Price */}
              <div className="text-right">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </div>
                <div className="mt-2 text-2xl font-bold">€{booking.totalPrice}</div>
                <div className="text-sm text-gray-500">Total Price</div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <div className="flex items-center text-gray-500">
                <AlertCircle size={16} className="mr-1" />
                <span className="text-sm">
                  Cancellation available until 24h before departure
                </span>
              </div>
              <div className="space-x-3">
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  View Details
                </button>
                {booking.status !== 'cancelled' && (
                  <button
                    onClick={() => onCancelBooking(booking.id)}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}