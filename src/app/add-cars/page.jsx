import AddCarsForm from "@/components/AddCarsForm";
import React from "react";

export const metadata = {
  title: "Add Car — DriveFleet",
  description: "List your car on DriveFleet and start earning.",
};

const AddCarsPage = () => {
  return (
    <div className="bg-[#DDE6ED]/30 ">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-5xl font-black text-[#27374D] pl-4 mb-10">
          Add a car listing
        </h1>

                    <AddCarsForm></AddCarsForm>

      </div>

      
    </div>
  );
};

export default AddCarsPage;
