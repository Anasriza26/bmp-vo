import React from 'react';

const FacilityImage: React.FC = () => {
  return (
    <div className="relative h-96 rounded-xl overflow-hidden shadow-sm mb-8">
      <img
        src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        alt="Futsal Prime - FD aerial view"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-sm font-medium text-gray-900">Futsal Field</span>
      </div>
    </div>
  );
};

export default FacilityImage;