import GroundDetails from "@/components/players/GroundDetails";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  console.log("Ground ID:", id);
  
  return (
    <>
      <GroundDetails id={id} />
    </>
  );
};

export default page;
