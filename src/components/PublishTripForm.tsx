import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Info, Plus, Minus } from 'lucide-react';

export default function PublishTripForm() {
  const [stops, setStops] = useState<string[]>(['']);
  const [rules, setRules] = useState<string[]>(['']);

  const addStop = () => setStops([...stops, '']);
  const removeStop = (index: number) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const addRule = () => setRules([...rules, '']);
  const removeRule = (index: number) => {
    const newRules = rules.filter((_, i) => i !== index);
    setRules(newRules);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Publish a Trip</h2>

      <div className="space-y-6">
        {/* Origin and Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Departure city"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Arrival city"
              />
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Departure Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Price and Seats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price per Seat (€)</label>
            <input
              type="number"
              min="0"
              step="0.5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Available Seats</label>
            <input
              type="number"
              min="1"
              max="8"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Stops */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Stops</label>
          {stops.map((stop, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={stop}
                onChange={(e) => {
                  const newStops = [...stops];
                  newStops[index] = e.target.value;
                  setStops(newStops);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add a stop"
              />
              {stops.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStop(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Minus size={20} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addStop}
            className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Plus size={20} />
            Add stop
          </button>
        </div>

        {/* Rules */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Trip Rules</label>
          {rules.map((rule, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={rule}
                onChange={(e) => {
                  const newRules = [...rules];
                  newRules[index] = e.target.value;
                  setRules(newRules);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add a rule"
              />
              {rules.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRule(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Minus size={20} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addRule}
            className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Plus size={20} />
            Add rule
          </button>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add any additional information about your trip..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Publish Trip
        </button>
      </div>
    </form>
  );
}