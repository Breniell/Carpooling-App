import React from 'react';
import { Star, Shield, Car, MapPin } from 'lucide-react';
import type { User, Review } from '../types';

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600"></div>

      {/* Profile Info */}
      <div className="relative px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar */}
          <div className="absolute -top-16 left-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Basic Info */}
          <div className="mt-16 md:mt-0 md:ml-40">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              {user.verified && (
                <Shield className="text-green-500" size={20} fill="currentColor" />
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Star className="text-yellow-500" size={16} fill="currentColor" />
              <span className="font-semibold">{user.rating.toFixed(1)}</span>
              <span className="text-gray-500">({user.reviews.length} reviews)</span>
            </div>
            <p className="text-gray-600 mt-2">{user.bio || "No bio provided"}</p>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} />
            <span>Paris, France</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Car size={18} />
            <span>50+ trips</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Star size={18} />
            <span>Member since 2023</span>
          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      {user.vehicleInfo && (
        <div className="px-6 py-4 border-t">
          <h2 className="text-lg font-semibold mb-4">Vehicle Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600">Vehicle:</span>
              <span className="ml-2">
                {user.vehicleInfo.year} {user.vehicleInfo.make} {user.vehicleInfo.model}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Color:</span>
              <span className="ml-2">{user.vehicleInfo.color}</span>
            </div>
            <div>
              <span className="text-gray-600">Comfort Level:</span>
              <span className="ml-2 capitalize">{user.vehicleInfo.comfort}</span>
            </div>
          </div>
        </div>
      )}

      {/* Reviews */}
      <div className="px-6 py-4 border-t">
        <h2 className="text-lg font-semibold mb-4">Reviews</h2>
        <div className="space-y-4">
          {user.reviews.map((review: Review) => (
            <div key={review.id} className="border-b pb-4 last:border-b-0">
              <div className="flex items-start gap-4">
                <img
                  src={review.author.avatar}
                  alt={review.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{review.author.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              fill={i < review.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}