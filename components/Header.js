import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex">
      <div className="flex-[1] text-2xl font-semibold items-center">
        OPENAUTO
      </div>
      <div className="flex-[1] hidden text-lg md:flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/phoneicon.svg"
            alt="Vercel Logo"
            width={22}
            height={18}
          />
          +769 586 4558
        </div>
        <div className="flex items-center">
          <Image src="/mail.svg" alt="Vercel Logo" width={22} height={18} />
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
