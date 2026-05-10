import React from "react";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <div>
        <h1>destination page</h1>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
