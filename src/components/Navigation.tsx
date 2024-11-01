import React from 'react';
import { Car, User, MessageSquare, Bell, Menu } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navigation() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Car className="text-blue-600" size={32} />
            <span className="ml-2 text-xl font-bold">CoVoiture</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <button className="p-2 hover:bg-gray-100 rounded-full relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MessageSquare size={20} />
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.name}</span>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                      <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                      <a href="/my-trips" className="block px-4 py-2 hover:bg-gray-100">My Trips</a>
                      <a href="/bookings" className="block px-4 py-2 hover:bg-gray-100">My Bookings</a>
                      <button 
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <a href="/login" className="px-4 py-2 hover:bg-gray-100 rounded-lg">Login</a>
                <a 
                  href="/register" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Register
                </a>
              </>
            )}
          </div>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}