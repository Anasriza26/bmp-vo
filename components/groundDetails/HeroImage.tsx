import Image from "next/image";

const HeroImage = ({src,alt} : {src: string, alt: string}) => (
  <div className="relative h-96 rounded-b-lg overflow-hidden shadow-lg">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
    />
  </div>
);

export default HeroImage;
