import Image from "next/image";

const HeroImage = () => (
  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
    <Image
      src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Futsal Prime - FD aerial view"
      fill
      className="object-cover"
    />
  </div>
);

export default HeroImage;
