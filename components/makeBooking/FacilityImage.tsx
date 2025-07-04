import React from 'react';
import Image from 'next/image';
import { BackButton } from '../home/BackButton';

const FacilityImage: React.FC = () => {
  return (
    <div className="relative w-full h-64 sm:h-96 rounded-b-lg overflow-hidden mb-2">
      <Image
        src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        alt="Futsal Prime - FD aerial view"
        fill
        className="object-cover"
      />

      <div className=" absolute top-4 left-2 z-10">
        <BackButton />
      </div>
    </div>
  );
};

export default FacilityImage;
