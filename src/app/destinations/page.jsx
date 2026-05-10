import React from "react";
import DestinationCard from "../Components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destination");
  const destinations = await res.json();
  console.log(destinations);
  return (
    <div className="container mx-auto px-4">
      <div>
        <h1>All Destinations</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {destinations.map((item) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
