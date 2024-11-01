import React, { useState } from 'react';
import { Bell, Shield, Music, Smoking, Dog, Coffee } from 'lucide-react';

export default function UserPreferences() {
  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    privacy: {
      showProfile: true,
      showPhone: false,
      showEmail: false,
    },
    tripPreferences: {
      music: true,
      smoking: false,
      pets: true,
      chat: true,
    },
  });

  const handleNotificationChange = (type: keyof typeof preferences.notifications) => {
    setPreferences((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  const handlePrivacyChange = (type: keyof typeof preferences.privacy) => {
    setPreferences((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: !prev.privacy[type],
      },
    }));
  };

  const handleTripPreferenceChange = (type: keyof typeof preferences.tripPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      tripPreferences: {
        ...prev.tripPreferences,
        [type]: !prev.tripPreferences[type],
      },
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Preferences</h2>

      {/* Notifications */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="text-blue-600" size={20} />
          <h3 className="text-lg font-semibold">Notifications</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                preferences.notifications.email ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handleNotificationChange('email')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  preferences.notifications.email ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Push Notifications</span>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                preferences.notifications.push ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handleNotificationChange('push')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  preferences.notifications.push ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">SMS Notifications</span>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                preferences.notifications.sms ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handleNotificationChange('sms')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  preferences.notifications.sms ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Privacy */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-blue-600" size={20} />
          <h3 className="text-lg font-semibold">Privacy</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Show Profile to Other Users</span>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                preferences.privacy.showProfile ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handlePrivacyChange('showProfile')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  preferences.privacy.showProfile ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Show Phone Number</span>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                preferences.privacy.showPhone ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handlePrivacyChange('showPhone')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  preferences.privacy.showPhone ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Show Email Address</span>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                preferences.privacy.showEmail ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handlePrivacyChange('showEmail')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  preferences.privacy.showEmail ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Trip Preferences */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Trip Preferences</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-500 cursor-pointer transition-colors duration-200"
               onClick={() => handleTripPreferenceChange('music')}>
            <Music className={preferences.tripPreferences.music ? 'text-blue-600' : 'text-gray-400'} size={24} />
            <div>
              <p className="font-medium">Music</p>
              <p className="text-sm text-gray-500">I enjoy music during trips</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-500 cursor-pointer transition-colors duration-200"
               onClick={() => handleTripPreferenceChange('smoking')}>
            <Smoking className={preferences.tripPreferences.smoking ? 'text-blue-600' : 'text-gray-400'} size={24} />
            <div>
              <p className="font-medium">Smoking</p>
              <p className="text-sm text-gray-500">I accept smoking breaks</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-500 cursor-pointer transition-colors duration-200"
               onClick={() => handleTripPreferenceChange('pets')}>
            <Dog className={preferences.tripPreferences.pets ? 'text-blue-600' : 'text-gray-400'} size={24} />
            <div>
              <p className="font-medium">Pets</p>
              <p className="text-sm text-gray-500">I accept pets in the car</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-500 cursor-pointer transition-colors duration-200"
               onClick={() => handleTripPreferenceChange('chat')}>
            <Coffee className={preferences.tripPreferences.chat ? 'text-blue-600' : 'text-gray-400'} size={24} />
            <div>
              <p className="font-medium">Chat</p>
              <p className="text-sm text-gray-500">I enjoy conversation</p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Save Preferences
      </button>
    </div>
  );
}