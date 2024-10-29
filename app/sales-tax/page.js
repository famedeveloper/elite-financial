import React from "react";
import bannerImage from "../../assets/banner-illustration.png";
import Image from "next/image";
import whatsapp from "../../assets/whatsapp.png";
import sme from "../../assets/sme.png";
import startup from "../../assets/startup.png";
import freelancer from "../../assets/freelancer.png";
import Contact from "../../components/Contact/index";
import contactBanner from "../../assets/contact-banner.png";
import Brands from "../../components/Brands/index";

const page = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[50px]"
    >
      <div className=" relative bg-[#f7621222] pt-12 pb-16 lg:h-[410px]">
        <div className="container">
          <div className="-mx-4 flex ">
            <div className=" px-4 md:w-4/6">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-black  sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                PAKISTAN'S TRUSTED SALES TAX SOLUTIONS FOR YOUR BUSINESS
              </h2>
              <p className="mb-12 text-base font-medium !leading-relaxed text-body-color   sm:text-lg md:text-xl">
                Streamline your operations by entrusting us with your GST and
                PST registration, monthly sales tax filings, and compliance
                notices. Let us handle the complexities of sales tax management,
                so you can concentrate on growing your business and achieving
                your goals.
              </p>
              <button className="flex items-center justify-center rounded-md border-2 border-[#00000077] bg-white py-2 px-4 text-base font-semibold duration-300 ease-in-out">
                <Image src={whatsapp} height={38} width={38} />
                <span>0312 3789784</span>
              </button>
            </div>
            <div className="flex items-center justify-center md:w-2/6">
              <div className="hidden h-[345px] w-[345px] rounded-full bg-primary lg:block"></div>
              <Image
                src={bannerImage}
                alt="logo"
                width={1000}
                height={1000}
                className="absolute bottom-0 right-[20rem] hidden w-[320px] lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" container">
        <div className=" py-12">
          <div className="">
            <h2 className=" text-center text-[32px] font-bold text-primary">
              If you are an SME, Startup, or Freelancer
            </h2>
          </div>
          <div className=" flex flex-wrap items-center justify-center">
            <div className=" m-6 flex h-[230px] w-[230px] flex-col items-center justify-center rounded-lg border-[2px] border-[#0000002b]">
              <div>
                <Image className=" w-[110px]" src={sme} alt="sme" />
              </div>
            </div>
            <div className=" m-6 flex h-[230px] w-[230px] flex-col items-center justify-center rounded-lg border-[2px] border-[#0000002b]">
              <div>
                <Image className=" w-[190px]" src={startup} alt="startup" />
              </div>
            </div>
            <div className=" m-6 flex h-[230px] w-[230px] flex-col items-center justify-center rounded-lg border-[2px] border-[#0000002b]">
              <div>
                <Image
                  className=" w-[190px]"
                  src={freelancer}
                  alt="freelancer"
                />
              </div>
            </div>
          </div>

          <p className=" text-center text-[20px]">
            Eliminate the hassle of Sales Tax concerns. Our team of qualified
            Chartered Accountants, Tax Consultants, and Legal Experts will
            manage everything for you, ensuring compliance and peace of mind.
          </p>
        </div>
      </div>

      <div className=" bg-[#f7621222]">
        <div className=" container lg:py-14">
          <div className=" grid grid-cols-12">
            <div className=" relative col-span-6">
              <Image
                src={contactBanner}
                className=" absolute top-[-20px] w-[80%]"
                alt="contact-banner"
              />
            </div>
            <div className=" col-span-6 flex items-center justify-center">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      <div className=" my-8">
        <Brands />
      </div>
    </section>
  );
};

export default page;
