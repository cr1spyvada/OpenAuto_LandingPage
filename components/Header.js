import React from "react";

const Header = () => {
  return (
    <div className="flex p-6">
      <div className="flex-[1] text-2xl font-semibold items-center">
        OPENAUTO
      </div>
      <div className="flex-[1] hidden text-lg md:flex justify-between items-center">
        <div className="">+769 586 4558</div>
        <div className="">service@openauto.ca</div>
        <div className="border rounded-full p-2 px-6">
          Download the mobile app
        </div>
      </div>
    </div>
  );
};

export default Header;
