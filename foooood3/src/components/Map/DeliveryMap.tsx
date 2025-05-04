import React from 'react';

// Use a Google Maps-style static image (royalty-free or placeholder)
const MAP_IMG = 'https://maps.googleapis.com/maps/api/staticmap?center=Delhi,IN&zoom=13&size=600x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&key=AIzaSyDUMMYKEY';
const ROUTE_POINTS = [
  { x: 80, y: 320 }, // Start (restaurant)
  { x: 200, y: 180 },
  { x: 400, y: 220 },
  { x: 520, y: 100 }, // End (user)
];

const DeliveryMap: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  // Determine delivery status based on progress
  const getStatus = () => {
    if (progress === 0) return 'Order Placed';
    if (progress < 0.3) return 'Preparing';
    if (progress < 0.7) return 'On the Way';
    if (progress < 1) return 'Almost There';
    return 'Delivered';
  };

  const status = getStatus();

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Delivery Status</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            progress === 1 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {status}
          </span>
        </div>
        
        {/* Progress Steps */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
          <div className="flex justify-between relative">
            {['Order Placed', 'Preparing', 'On the Way', 'Delivered'].map((step, index) => {
              const isCompleted = index <= (progress * 3);
              return (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                    isCompleted ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-xs ${isCompleted ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Simple Map */}
      <div className="bg-gray-100 rounded-2xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
            <span className="text-sm text-gray-600">Restaurant</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <span className="text-sm text-gray-600">Your Location</span>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Map View</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap; 