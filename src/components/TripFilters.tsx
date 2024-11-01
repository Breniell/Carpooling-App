import React from 'react';
import { Sliders, Clock, Car, DollarSign } from 'lucide-react';

export default function TripFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Sliders size={20} className="text-blue-600" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        {/* Departure Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock size={16} className="inline mr-2" />
            Departure Time
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Early Morning (4am - 8am)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Morning (8am - 12pm)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Afternoon (12pm - 4pm)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Evening (4pm - 8pm)</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign size={16} className="inline mr-2" />
            Price Range
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">€50</span>
          </div>
        </div>

        {/* Vehicle Comfort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Car size={16} className="inline mr-2" />
            Vehicle Comfort
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Basic</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Comfortable</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Luxury</span>
            </label>
          </div>
        </div>

        {/* Driver Preferences */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferences
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Verified Drivers Only</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">4+ Star Rating</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 mr-2" />
              <span className="text-sm">Women Only</span>
            </label>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Apply Filters
        </button>
      </div>
    </div>
  );
}