import React, { useState, useEffect } from 'react';
import { Moon, Sun, Shield, Phone, MessageCircle, Mic, AlertTriangle, MapPin, Heart, Star, Navigation, Mail, User, Lock } from 'lucide-react';

export default function SHEmapsApp() {
  const [currentScreen, setCurrentScreen] = useState('loading');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [permissions, setPermissions] = useState({
    location: true,
    contacts: true,
    notifications: true
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setCurrentScreen('signup');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const LoadingScreen = () => (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden">
          <h1 className="text-3xl font-serif italic font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            SHEmaps
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
        </div>
      </div>
      <p className="text-gray-700 text-lg font-medium mb-8">Travel Safer Not Shorter</p>
      <div className="w-64 h-2 bg-pink-100 rounded-full overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-loading" />
      </div>
    </div>
  );

  const SignupScreen = () => (
    <div className="h-full w-full bg-gradient-to-br from-pink-50 to-purple-50 p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif italic font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Join SHEmaps
          </h2>
          <p className="text-gray-600">Create your account to travel safer</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">Required Permissions</h3>
            {Object.entries(permissions).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 capitalize">{key}</span>
                <button
                  onClick={() => setPermissions(prev => ({ ...prev, [key]: !prev[key] }))}
                  className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                    value ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentScreen('main')}
            className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button className="text-pink-600 font-semibold">Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );

  const MainInterface = () => (
    <div className={`h-full w-full relative bg-gradient-to-br ${isDarkMode ? 'from-gray-900 to-gray-800' : 'from-pink-50 to-purple-50'}`}>
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-white/80 backdrop-blur-lg">
        <div className="font-serif italic text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          SHEmaps
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
        >
          {isDarkMode ? <Sun className="text-yellow-500" size={20} /> : <Moon className="text-purple-600" size={20} />}
        </button>
      </div>

      {/* Search Bar */}
      <div className="absolute top-20 left-4 right-4 z-40">
        <div className="relative">
          <input 
            type="text"
            placeholder="Where would you like to go?"
            className="w-full px-6 py-4 rounded-full shadow-lg bg-white/90 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <Navigation className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-500" size={20} />
        </div>
      </div>

      {/* Map Area */}
      <div className="h-full w-full relative overflow-hidden">
        <div className={`h-full w-full ${isDarkMode ? 'brightness-75' : ''} transition-all duration-500`}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50" />
        </div>

        {/* Safety Markers */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-red-500/20 animate-pulse">
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
        </div>

        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-orange-400/20 animate-pulse">
          <div className="absolute inset-0 rounded-full bg-orange-400/20 animate-ping" />
        </div>

        <div className="absolute top-1/3 right-1/3 flex flex-col items-center">
          <div className="p-3 rounded-full bg-white shadow-lg">
            <Shield className="text-green-500" size={24} />
          </div>
          <span className="mt-2 px-3 py-1 rounded-full bg-black/60 text-white text-xs">Police Station</span>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="p-2 rounded-full bg-pink-500 shadow-lg animate-bounce">
            <Heart className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Safety Information Card */}
      <div className="absolute bottom-24 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full bg-green-100">
            <Shield className="text-green-500" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Safest Route Selected</h3>
            <p className="text-sm text-gray-600">15 min · 2.3 km · Well-lit path</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="text-pink-500" size={16} />
            <span className="text-sm text-gray-600">4 SHEmaps users nearby</span>
          </div>
          <div className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
            95% Safe
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl p-4">
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1">
            <div className="p-3 rounded-full bg-red-100">
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <span className="text-xs text-gray-600">SOS</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="p-3 rounded-full bg-purple-100">
              <MessageCircle className="text-purple-500" size={24} />
            </div>
            <span className="text-xs text-gray-600">Chat</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="p-3 rounded-full bg-pink-100">
              <Phone className="text-pink-500" size={24} />
            </div>
            <span className="text-xs text-gray-600">Call</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="p-3 rounded-full bg-blue-100">
              <Mic className="text-blue-500" size={24} />
            </div>
            <span className="text-xs text-gray-600">Voice</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full">
      {currentScreen === 'loading' && <LoadingScreen />}
      {currentScreen === 'signup' && <SignupScreen />}
      {currentScreen === 'main' && <MainInterface />}
    </div>
  );
}
