"use client";

import { useState } from "react";

const page = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [results, setResults] = useState({
    monthlySalary: 0,
    monthlyTax: 0,
    monthlySalaryAfterTax: 0,
    annualSalary: 0,
    annualTax: 0,
    annualSalaryAfterTax: 0,
  });

  const calculateTax = (annualIncome) => {
    if (annualIncome <= 600000) return 0;
    if (annualIncome <= 1200000) return ((annualIncome - 600000) / 100) * 5;
    if (annualIncome <= 2200000) return 30000 + (annualIncome - 1200000) * 0.15;
    if (annualIncome <= 3200000)
      return 180000 + (annualIncome - 2200000) * 0.25;
    if (annualIncome <= 4100000) return 430000 + (annualIncome - 3200000) * 0.3;
    return 700000 + (annualIncome - 4100000) * 0.35;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const annualSalary = monthlySalary * 12;
    const annualTax = calculateTax(annualSalary);
    const annualSalaryAfterTax = annualSalary - annualTax;
    const monthlyTax = annualTax / 12;
    const monthlySalaryAfterTax = annualSalaryAfterTax / 12;

    setResults({
      monthlySalary: Number(monthlySalary).toLocaleString(),
      monthlyTax: monthlyTax.toLocaleString(),
      monthlySalaryAfterTax: monthlySalaryAfterTax.toLocaleString(),
      annualSalary: Number(annualSalary).toLocaleString(),
      annualTax: annualTax.toLocaleString(),
      annualSalaryAfterTax: annualSalaryAfterTax.toLocaleString(),
    });
  };

  return (
    <div className="bg-gray-100 mt-[200px] flex min-h-screen">
      <div className="container grid grid-cols-12 rounded-lg bg-white p-8 shadow-lg">
        <div className="col-span-4 mr-12 mb-8">
          <div>
            <h2 className="text-red-600 text-4xl mb-6 font-medium">
              Salary <span className="text-primary">Tax Calculator</span>
            </h2>
            <p className=" text-[18px]">
              Apart from compliance, signing up with our online tax return
              portal allows you to access an easy to use tax return calculator
              that lays out all figures for you, in a comprehensible manner. Our
              salary tax calculator is constantly updated with the latest
              regulations and tax rates in Pakistan.
            </p>
          </div>
        </div>
        <div className=" col-span-8">
          <div className="border-2 border-[#00000032] p-8">
            <div className="w-full max-w-md ml-auto">
              <div>
                <form onSubmit={handleSubmit} className="flex space-x-4">
                  <div>
                    {/* <select className="w-[100px] rounded-md border px-3 py-2">
                  <option>2024</option>
                </select> */}
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="Enter your monthly salary"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-500 rounded-md bg-primary px-4 py-2 text-white"
                  >
                    Calculate
                  </button>
                </form>
              </div>
            </div>

            <div className=" grid max-w-[900px] mt-4 grid-cols-12">
              <div className=" col-span-4 mx-2 border-x-2 border-[#e8e8e8] py-4 text-center shadow-xl shadow-[#0024b63a]">
                <div className=" mt-2 bg-[#0024b61f] py-4">
                  <h2 className="mb-2 font-medium text-primary">
                    Monthly Salary
                  </h2>
                  <h2 className="text-[22px] font-bold text-primary">
                    {results.monthlySalary}
                  </h2>
                </div>
                <div className=" py-4">
                  <h2 className="mb-2 font-medium text-primary">
                    Yearly Salary
                  </h2>
                  <h2 className="text-[22px] font-bold text-primary">
                    {results.annualSalary}
                  </h2>
                </div>
              </div>
              <div className=" col-span-4 mx-2 border-x-2 border-[#e8e8e8] py-4 text-center shadow-xl shadow-[#0024b63a]">
                <div className=" mt-2 bg-[#0024b61f] py-4">
                  <h2 className="mb-2 font-medium text-primary">Monthly Tax</h2>
                  <h2 className="text-[22px] font-bold text-primary">
                    {results.monthlyTax}
                  </h2>
                </div>
                <div className=" py-4">
                  <h2 className="mb-2 font-medium text-primary">Yearly Tax</h2>
                  <h2 className="text-[22px] font-bold text-primary">
                    {results.annualTax}
                  </h2>
                </div>
              </div>
              <div className=" col-span-4 mx-2 border-x-2 border-[#e8e8e8] py-4 text-center shadow-xl shadow-[#0024b63a]">
                <div className=" mt-2 bg-[#0024b61f] py-4">
                  <h2 className="mb-2 font-medium text-primary">
                    Salary After Tax
                  </h2>

                  <h2 className="text-[22px] font-bold text-primary">
                    {results.monthlySalaryAfterTax}
                  </h2>
                </div>
                <div className=" py-4">
                  <h2 className="mb-2 font-medium text-primary">
                    Salary After Tax
                  </h2>
                  <h2 className="text-[22px] font-bold text-primary">
                    {results.annualSalaryAfterTax}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
