import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex">
      <div className="flex-[9] text-2xl lg:text-4xl font-semibold items-center">
        OPENAUTO
      </div>
      <div className="flex-[11] hidden text-lg md:flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <Image src="/phone.png" alt="Vercel Logo" width={18} height={14} />
          +769 586 4558
        </div>
        <div className="flex items-center gap-x-1">
          <Image src="/mail.png" alt="Vercel Logo" width={18} height={14} />
          service@openauto.ca
        </div>
        <div className="border-2 border-gray-400 font-medium rounded-full p-2 px-6">
          Download the mobile app
        </div>
      </div>
    </div>
  );
};

export default Header;
