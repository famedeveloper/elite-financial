"use client";

import React from "react";

const index = () => {
  return (
    <div>
      <div className=" h-[100vh] w-full bg-dark">
        <div className=" border-b-[1px] border-[#ffffff74] p-4">
          <div>
            <h2 className=" text-[14px] text-white">2024 Taxes</h2>
          </div>
        </div>
        <div className=" border-b-[1px] border-[#ffffff74] px-4 py-2">
          <h2 className=" text-[10px] text-[#ffffff91]">INCOME TAX</h2>
        </div>
        <div className=" flex justify-between border-b-[1px] border-[#ffffff74] px-4 py-3">
          <div>
            <h2 className=" text-[14px] text-white">PAYABLE</h2>
          </div>
          <div>
            <p className="text-[14px] text-white">500</p>
          </div>
        </div>
        <div className=" border-b-[1px] border-[#ffffff74] px-4 py-2">
          <h2 className=" text-[10px] text-[#ffffff91]">
            WEALTH RECONCILATION
          </h2>
        </div>
        <div className=" flex justify-between border-b-[1px] border-[#ffffff74] px-4 py-3">
          <div>
            <h2 className=" text-[14px] text-white">OPENING WEALTH</h2>
          </div>
          <div>
            <p className="text-[14px] text-white">500</p>
          </div>
        </div>
        <div className=" border-b-[1px] border-[#ffffff74] px-4 py-2">
          <h2 className=" text-[10px] text-[#ffffff91]">SA</h2>
        </div>
        <div className=" flex justify-between border-b-[1px] border-[#ffffff74] px-4 py-3">
          <div>
            <h2 className=" text-[14px] text-white">EXPENSES</h2>
          </div>
          <div>
            <p className="text-[14px] text-white">500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
