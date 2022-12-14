import React, { useState } from "react";
import Image from "next/image";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [responseStyle, setResponseStyle] = useState("");
  const postData = async (e) => {
    e.preventDefault();
    const response = await fetch("api/user", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        headers: {
          "Content-Type": "application-json",
        },
      }),
    });
    const data = await response;
    if (data.status === 200) {
      const msg = data.json();
      // alert("sucessfully added message to data");
      setResponse("Uploaded");
      setResponseStyle("text-green-300");
      setEmail("");
      setName("");
    } else {
      setResponseStyle("text-red-300");
      setResponse("Failed");
      setEmail("");
      setName("");
    }
  };

  return (
    <div className="h-[90%] flex flex-col lg:flex-row gap-y-4">
      {/* first col */}
      <div className="h-[50%] lg:h-full lg:gap-y-10 gap-y-6 lg:flex-[2] flex flex-col justify-center">
        {/* text*/}
        <div className="flex flex-col gap-y-4">
          <div className="text-center text-gray-300 lg:text-left text-2xl lg:text-5xl font-bold">
            Vehicle Maintenance From The Comfort of Your Home
          </div>
          <div className="text-center lg:text-left px-10 lg:px-0 text-xs lg:text-sm">
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </div>
        </div>
        <div className={responseStyle}>{response}</div>
        <form
          onSubmit={postData}
          className="w-full lg:w-3/5 space-y-2 lg:space-y-4"
        >
          <input
            required
            type="text"
            className="border  border-gray-500 bg-transparent p-2 px-4 w-full rounded-full"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            className="border border-gray-500 bg-transparent p-2 px-4 w-full rounded-full"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="border border-gray-500 font-medium p-2 w-full rounded-full text-center hover:bg-purple-500 hover:border-purple-500 hover:text-white">
            Submit
          </button>
        </form>
      </div>
      <div className="h-[50%] lg:flex-[3] flex flex-col gap-y-4 lg:h-full justify-between">
        <div className="h-[75%] lg:h-[90%] items-center">
          <img
            src="/Pickup_Illustration.png"
            style={{ height: "100%", margin: "auto" }}
            alt="pickup image"
          />
        </div>
        <div className="lg:ml-auto flex text-white h-5 justify-center gap-x-2">
          <Image src="/facebook.svg" alt="Vercel Logo" width={32} height={16} />
          <Image src="/twitter.svg" alt="Vercel Logo" width={32} height={16} />
          <Image src="/youtube.svg" alt="Vercel Logo" width={32} height={16} />
          <Image src="/linkedin.svg" alt="Vercel Logo" width={32} height={16} />
          <Image
            src="/instagram.svg"
            alt="Vercel Logo"
            width={32}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
