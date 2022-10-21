import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-12 text-xs lg:text-sm">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-y-4">
        <div className="text-gray-200 flex-[1] lg:flex-[3] text-2xl lg:text-4xl font-semibold text-center lg:text-left">
          OPENAUTO
        </div>
        <div className="flex lg:flex-[1] justify-between font-medium">
          <div className="flex items-center gap-x-2">
            <Image src="/phone.png" alt="Vercel Logo" width={16} height={16} />
            +769 586 4558
          </div>
          <div className="flex items-center gap-x-2">
            <Image src="/mail.png" alt="Vercel Logo" width={16} height={16} />
            service@openauto.ca
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-y-6 font-medium">
        <div className="text-center">Open Auto @ all rights reserved</div>
        <div className="flex justify-between lg:hidden">
          <div className="">Privacy policy</div>
          <div className="">Terms of use</div>
          <div className="">Cookie policy</div>
        </div>
        <div className="flex justify-between">
          <Image src="/facebook.svg" alt="Vercel Logo" width={32} height={20} />
          <Image src="/twitter.svg" alt="Vercel Logo" width={32} height={20} />
          <Image src="/youtube.svg" alt="Vercel Logo" width={32} height={20} />
          <Image src="/linkedin.svg" alt="Vercel Logo" width={32} height={20} />
          <Image
            src="/instagram.svg"
            alt="Vercel Logo"
            width={32}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
