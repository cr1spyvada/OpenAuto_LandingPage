import React from "react";

const InfoPage = () => {
  return (
    <div className="lg:max-h-screen flex flex-col lg:flex-row-reverse lg:gap-x-36 gap-y-6">
      <div className="flex-[1] my-auto flex flex-col text-center gap-y-6">
        <div className="text-gray-300 text-2xl lg:text-5xl text-center font-bold lg:text-left">
          Focused on Time Saving
        </div>
        <div className="text-xs lg:text-sm text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was
        </div>
        <div className="border-2 border-gray-300 font-medium rounded-full p-2 px-6 w-full lg:w-fit">
          Download the mobile app
        </div>
      </div>
      <div className="flex-[1] lg:h-full">
        <img
          src="/picku service.png"
          style={{ height: "100%", margin: "auto" }}
          alt="pickup service"
        />
      </div>
    </div>
  );
};

export default InfoPage;
