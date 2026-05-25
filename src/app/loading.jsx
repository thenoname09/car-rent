"use client";

import { ClipLoader } from "react-spinners";




const loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">

      <ClipLoader
        color="#27374D"
        size={60}
        speedMultiplier={0.8}
      />

      

    </div>
    );
};

export default loading;