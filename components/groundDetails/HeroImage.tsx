import Image from "next/image";
import { BackButton } from "../home/BackButton";

const HeroImage = ({src,alt} : {src: string, alt: string}) => (
  <div className="relative h-96 rounded-b-lg overflow-hidden shadow-lg">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
    />
    <div className="absolute top-4 left-2 z-10 ">
      <BackButton  />
    </div>
    
  </div>
);

export default HeroImage;