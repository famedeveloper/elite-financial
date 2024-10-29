// app/business-services/page.js
"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Tabs from "../../components/Tabs";
import whatsapp from "../../assets/whatsapp.png";
import Image from "next/image";
import Contact from "../../components/Contact/index";

const services = {
  income: [
    {
      title: "NTN Registration – Salaried",
      price: "Rs. 700",
      time: "1 - 2 Working Days",
      requirements: [
        "Copy of CNIC",
        "Latest paid electricity bill",
        "Phone Number",
        "Email Address",
      ],
    },
    {
      title: "NPN Registration – Business",
      price: "Rs. 2,300",
      time: "1 - 2 Working Days",
      requirements: [
        "Copy of CNIC",
        "Rent agreement/ownership docs of office premises",
        "Letterhead",
        "Latest paid electricy",
        "Phone Number",
        "Email address",
      ],
    },
    {
      title: "NTN Registration – Partnership or AOP",
      price: "Rs. 6,500",
      time: "2 - 3 Working Days",
      requirements: [
        "Partnership Deed",
        "Partnership registration certificate",
        "Authorization of principal Officer",
        "Color copy of CNIC's of Partners",
        "Rent agreement/ownership docs of Office premises",
        "Letterhead",
        "Latest paid electricy",
        "Phone Number",
        "Email address",
      ],
    },
    {
      title: "NTN Registration – Company",
      price: "Rs. 14,000",
      time: "2 - 3 Working Days",
      requirements: [
        "Incorporation Certificate",
        "Memorandum & Articles of Association",
        "Partnership registration certificate",
        "Authorization of principal Officer",
        "Color copy of CNIC's of Partners",
        "Partnership registration certificate",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
      ],
    },
    {
      title: "NTN Registration – NPO",
      price: "Rs. 15,000",
      time: "2 - 3 Working Days",
      requirements: [
        "NTN of all members",
        "Registration Certificate",
        "Constitution of NPO",
        "Authorization of principal Officer",
        "Color copy of CNIC's of Partners",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
        "Any other document as required by the concerned authority",
      ],
    },
    {
      title: "Quarterly Withholding Statements Tax Filing",
      price: "Rs. 4,500",
      time: "3 - 4 Working Days",
      requirements: [
        "Details of Taxes deducted at source during each quarter",
        "Other information as required",
      ],
    },
    {
      title: "Annual Income Tax Filing- Salaried",
      price: "Rs. 3,000",
      time: "3 - 5 Working Days",
      requirements: [
        "Annual Salary certificate",
        "Other Income sources if any",
        "Annual personal expense",
        "Details of all owned assets",
        "Investments during the year",
        "Disposals during the year",
        "Other inflows/outflows during the year",
        "Other information as required",
      ],
    },
    {
      title: "Annual Income Tax Filing- Sole Proprietor",
      price: "Minimum Fee: Rs. 5,000",
      time: "3 - 5 Working Days",
      requirements: [
        "Annual Accounts",
        "Other Income sources if any",
        "Annual personal expense",
        "Details of all owned assets",
        "Investments during the year",
        "Disposals during the year",
        "Other inflows/outflows during the year",
        "Other information as required",
      ],
    },
    {
      title: "Annual Income Tax Filing- Partnership/PVT Company",
      price: "Minimum Fee: Rs. 10,000",
      time: "5 Working Days",
      requirements: [
        "Annual Audited Accounts",
        "Taxes deducted at source",
        "Annual personal expense",
      ],
    },
    {
      title: "Annual Income Tax Filing- NPO/Charitable Trusts",
      price: "Minimum Fee: Rs. 15,000",
      time: "5 Working Days",
      requirements: [
        "Annual Audited Accounts",
        "Taxes deducted at source",
        "Other information as required",
      ],
    },
  ],
  sales: [
    {
      title: "GST Registration",
      price: "Rs. 7,000",
      time: "2 - 3 Working Days",
      requirements: [
        "Bank Account Certificate",
        "Acquisition Date, Capacity and Business Activity",
        "Particulars of all branches (if any)",
        "Authorization of principal Officer",
        "GPS-tagged photographs of the business premises",
        "Consumer number with the gas and electricity supplier along with pictures of utilities meter",
        "GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only)",
        "Color copy of CNIC's of Partners",
        "Rent agreement/ownership docs of Office premises",
        "Latest paid electricity bill",
        "Biometric Verification",
        "Post Verification (Manufacturer only)",
      ],
    },
    {
      title: "Monthly Federal / Provincial Sales Tax Return Filing",
      extraInfo:
        "(Actual Fee will depend on the turnover and nature of business activity)",
      price: "Rs. 5,000",
      time: "3 - 4 Working Days",
      requirements: [
        "Copies of Sales Invoices",
        "Copies of purchases Invoices",
        "Bank Statements",
        "Other information as required",
      ],
    },
    {
      title: "PST Registration",
      extraInfo: "Individual",
      price: "Rs. 15,000",
      time: "7 - 10 Working Days",
      requirements: [
        "Color copy of CNIC",
        "Rent agreement/ownership docs of Office premises",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
        "Bank Account Certificate",
        "Acquisition Date, Capacity and Business Activity",
        "Particulars of all branches (if any)",
        "Authorization of principal Officer",
        "Signed Application Form",
      ],
    },
    {
      title: "PST Registration",
      extraInfo: "Company",
      price: "Rs. 15,000",
      time: "7 - 10 Working Days",
      requirements: [
        "Incorporation Certificate",
        "Memorandum of Association",
        "Articles of Association",
        "Incorporation Form/ Form A & 29",
        "Color copy of CNIC",
        "Rent agreement/ownership docs of Office premises",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
        "Bank Account Certificate",
        "Acquisition Date, Capacity and Business Activity",
        "Particulars of all branches (if any)",
        "Authorization of principal Officer",
        "Signed Application Form",
      ],
    },
    {
      title: "PST Registration",
      extraInfo: "Partnership",
      price: "Rs. 15,000",
      time: "7 - 10 Working Days",
      requirements: [
        "Incorporation Certificate",
        "Memorandum of Association",
        "Articles of Association",
        "Incorporation Form/ Form A & 29",
        "Color copy of CNIC",
        "Rent agreement/ownership docs of Office premises",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
        "Bank Account Certificate",
        "Acquisition Date, Capacity and Business Activity",
        "Particulars of all branches (if any)",
        "Authorization of principal Officer",
        "Signed Application Form",
      ],
    },
  ],
  company: [
    {
      title: "Private Limited Company Registration",
      price: "Rs. 20,000",
      time: "3 - 10 working days depending upon availability of Name",
      requirements: [
        "Three Names of the proposed company",
        "Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers",
        "NTN of the proposed directors / subscribers",
        "Registered address / correspondence address of the proposed Company",
        "The principal business of the proposed company",
        "Nature of the business activity",
        "Authorized Capital",
        "Paid up Capital",
        "Value per share e.g.Rs. 10, Rs. 50 or Rs. 100 etc",
        "Combination of Shares agreed to be subscribed by each director / subscriber",
        "Name of the Chief Executive of the Proposed Company",
        "Authorization from other subscribers. (For Offline only)",
        "Telephone numbers and email ID of all the proposed directors",
        "Telephone numbers and email ID of all the proposed directors of the Company",
        "Name of declarant person",
        "SECP login details of the proposed directors / subscribers(if any)",
      ],
    },
    {
      title: "Single Member Company Registration",
      price: "Rs. 20,000",
      extraInfo: "(Other than Licensed entity)",
      extraPriceInfo:
        "Excluding SECP Fees (SECP Fees depends on the amount of Authorized capital)",
      time: "3 - 10 working days depending upon availability of Name",
      requirements: [
        "Three Names of the proposed company",
        "Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers",
        "NTN of the proposed directors / subscribers",
        "Registered address / correspondence address of the proposed Company",
        "The principal business of the proposed company",
        "Nature of the business activity",
        "Authorized Capital",
        "Paid up Capital",
        "Value per share e.g.Rs. 10, Rs. 50 or Rs. 100 etc",
        "Combination of Shares agreed to be subscribed by each director / subscriber",
        "Name of the Chief Executive of the Proposed Company",
        "Authorization from other subscribers. (For Offline only)",
        "Telephone numbers and email ID of all the proposed directors",
        "Telephone numbers and email ID of all the proposed directors of the Company",
        "SECP login details of the proposed directors / subscribers(if any)",
      ],
    },
    {
      title: "Limited Liability Partnership Registration (LLP)",
      price: "Rs. 30,000",
      extraInfo: "(Other THAN Licensed entity)",
      extraPriceInfo: "Excluding SECP Fees",
      time: "7 - 10 working days depending upon availability of Name and provision of signed documents by the client",
      requirements: [
        " Three NAMES of the proposed LLP",
        "Neat AND Clear Scanned copies of CNICs of ALL the proposed Partners",
        "FBR Credentials of the proposed partners",
        "Registered address/correspondence address of the proposed LLP",
        "The principal business of the proposed LLP",
        "Nature of the business activity",
        "A combination of Shares agreed TO be subscribed BY EACH partner",
        "Telephone numbers AND email IDs of ALL the proposed partners of the LLP",
        "SECP login details of the proposed partners (IF ANY)",
      ],
    },
    {
      title: "Partnership or AOP Registration From Registrar",
      price: "Rs 35,000",
      extraInfo:
        "(Services available only in Karachi, Hyderabad, Sukkur, Whole Punjab, Islamabad)",
      extraPriceInfo: "(depending upon city) Excluding official Fees",
      time: "7 - 15 working days subject to timely provision of signed documents by the client",
      requirements: [
        "Partnership Deed",
        "Signed Partnership Form",
        "Authorization of principal Officer",
        "Color copy of CNIC's of Partners",
        "Rent agreement/ownership docs of Office premises",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
      ],
    },
    {
      title: "NPO Registration with SECP",
      price: "Rs 320,000",
      extraInfo: "",
      extraPriceInfo: "Excluding SECP Fees (Rs. 180,000)",
      time: "3-4 Months working days subject to availability of Name & timely provision of signed documents by the client",
      requirements: [
        "Memorandum and articles of Association",
        "Authorization of principal Officer",
        "Color copy of CNIC's of Partners",
        "Rent agreement/ownership docs of Office premises",
        "Letterhead",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
        "NOC from Home Department",
      ],
    },
  ],
  intellectual: [
    {
      title: "Trademark Registration",
      price: "Rs. 65,000",
      time: "",
      requirements: [
        "TM-1 in duplicate",
        "Six representations affixed on a durable paper of 13x8 inch",
        "CNIC of the Trademark Holder/partners",
        "Specification of goods or services sought to be protected in any class",
        "Residential address of holder or Letterhead of the Business",
        "Other Information or Documents as required",
      ],
    },
    {
      title: "Copyright Registration",
      price: "Rs. 68,000",
      time: "",
      requirements: [
        "Two Copies of work",
        "Demand Draft / Pay order of fee as applicable per work",
        "CNIC of the Copyrights Holder / partners",
        "NOC from publisher if work has been published and publisher is different from applicant",
        "Search certificate from trademark Office if the work is capable of being used on goods",
        "Residential address of holder or Letterhead of the Business",
        "Power of attorney",
        "Other Information or Documents as required",
      ],
    },
    {
      title: "Patent Registration",
      price: "Rs. 150,000",
      time: "",
      requirements: [
        "Form P - 1 or Form P - 1A application without priority",
        "Form P - 2 or Form P - 2A application with priority",
        "Form P- 3 for provisional or Form P- 3A for complete specification",
        "Patent Specification",
        "Drawing(s), if any",
        "Demand Draft / Pay order of fee as applicable per work",
        "Form P - 28(power of Attorney) if any",
        "Priority document(for convention application",
        "CNIC of the Copyrights applicant",
        "Other Information or Documents as required",
      ],
    },
  ],
  usa: [
    {
      title: "Company Formation in USA - LLC / Inc. (C Corp)",
      price: "State fee $120",
      time: "3 Business Days",
      requirements: [
        "2 Suggested Names of the Company",
        "CNIC (English Only) / Passport of Director(s)",
      ],
    },
    {
      title: "Employer Identification Number (EIN)",
      price: "$160",
      time: "30 Business Days",
      requirements: ["Article of Organization", "Certificate of Organization"],
    },
    {
      title: "Open A US Bank Account",
      price: "$100",
      time: "30 Business Days",
      requirements: [
        "Article of Organization",
        "Certificate of Organization",
        "CNIC (English Only) / Passport of Director(s)",
        "EIN",
      ],
    },
    {
      title: "USA Company Formation - Complete Package",
      extraInfo: "(Company formation, EIN and Bank account)",
      price: "State Fee $ 349",
      time: "Company Formation:3 Business Days",
      requirements: [
        "2 Suggested Names of the Company",
        "CNIC (English Only) / Passport of Director(s)",
      ],
    },
    {
      title: "Tax Filing - State: LLC / Inc. (C Corp)",
      extraInfo: "(Company formation, EIN and Bank account)",
      price: "$ 200",
      time: "3 Business Days",
      requirements: [
        "Financial Statements",
        "Last Year's Tax Return, if applicable",
      ],
    },
    {
      title: "Tax Filing - Federal: LLC / Inc. (C Corp)",
      extraInfo: "(Company formation, EIN and Bank account)",
      price: "$ 200",
      time: "3 Business Days",
      requirements: [
        "Financial Statements",
        "Last Year's Tax Return, if applicable",
      ],
    },
  ],
};

services.all = Object.values(services).flat();

export default function BusinessServices() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState(
    searchParams.get("tab") || "all"
  );
  const [displayedServices, setDisplayedServices] = useState(
    services[currentTab] || services.all
  );

  useEffect(() => {
    const tab = searchParams.get("tab") || "all";
    setCurrentTab(tab);
  }, [searchParams]);

  useEffect(() => {
    const filteredServices = (services[currentTab] || services.all).filter(
      (service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedServices(filteredServices);
  }, [currentTab, searchQuery]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setSearchQuery("");
    router.push(`/business-services?tab=${tab}`, undefined, { shallow: true });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const matchingService = Object.keys(services).find((key) =>
        services[key].some((service) =>
          service.title.toLowerCase().includes(query.toLowerCase())
        )
      );
      if (matchingService) {
        setCurrentTab(matchingService);
        router.push(
          `/business-services?tab=${matchingService}&search=${query}`,
          undefined,
          { shallow: true }
        );
      }
    } else {
      router.push(`/business-services?tab=${currentTab}`, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <div className="container mt-[176px] p-4">
      <h1 className="mb-4 text-2xl font-bold">Our business services</h1>
      <p className="mb-4">
        Registering a business can be quite stressful. Worry not! Get expert
        assistance on how and which business structure to select and start your
        entrepreneurial journey with a bang!
      </p>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search services..."
        className="mb-4 w-full rounded-md border p-2"
      />
      <Tabs currentTab={currentTab} onTabChange={handleTabChange} />
      <div className="mt-4">
        {displayedServices.map((service, index) => (
          <div key={index} className="mb-4 rounded-md border p-12">
            <div className=" flex items-center justify-between">
              <h2 className="mb-3 text-xl text-[22px] font-semibold">
                {service.title}
              </h2>
              <p className="text-gray-700 text-[20px]">
                Price: {service.price}
              </p>
            </div>
            <p className="text-gray-700 text-[18px]">
              Completion Time: {service.time}
            </p>
            <ul className="ml-5 mt-2 mb-4 list-disc">
              {service.requirements.map((req, reqIndex) => (
                <li key={reqIndex} className="text-gray-700">
                  {req}
                </li>
              ))}
            </ul>
            <div className=" mt-12 flex items-center">
              <div>
                <button className="mr-4 flex items-center justify-center rounded-md border-2 border-[#0024b64f] px-2">
                  <Image src={whatsapp} height={38} width={38} />
                </button>
              </div>
              <div>
                <button className="bg-red-500 rounded-md bg-[#f76112] px-4 py-2 text-white">
                  Request for call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-[150px]">
        <Contact />
      </div>
    </div>
  );
}
