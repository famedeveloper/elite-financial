import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full p-8 shadow-lg">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h3 className="mb-5 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>

         <button className=" text-white bg-[#f76112] py-2 px-4 text-[16px] mt-4">Click here to start now</button>
      </div>
    </div>
  );
};

export default SingleFeature;
