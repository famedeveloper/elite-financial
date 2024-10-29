import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import pasha from "assets/pasha.png";
import alhabib from "assets/partners/al-habib.png";
import fbr from "assets/partners/FBR Logo.png";
import fpcci from "assets/partners/fpcci_logo-1.jpg";
import meezan from "assets/partners/logo (1).png";
import pra from "assets/partners/pra.png";
import prb from "assets/partners/prb.jpeg";
import secp from "assets/partners/SECP Logo.png";
import SRB from "assets/partners/SRB-logo-high-resolution_2048-1.png";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://www.befiler.com/assets/images/home/partner_11.png",
    image: "/images/pasha.png",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/acca.png",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/secp.png",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/pseb.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <SectionTitle
        title="Our Partners & Collaborators"
        paragraph="Expert Guidance and Support for Your Financial and Legal Needs"
        center
        mb="40px"
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp items-center justify-center rounded-md py-8 px-8   sm:px-10 md:px-[50px]"
              data-wow-delay=".1s
              "
            >
              <div className=" mb-12 grid grid-cols-12 items-center justify-center">
                <div className=" col-span-3 flex items-center justify-center">
                  <Image className=" w-[150px]" src={pasha} alt="pasha" />
                </div>
                <div className=" col-span-3 flex items-center justify-center">
                  <Image className=" w-[220px]" src={alhabib} alt="pasha" />
                </div>
                <div className=" col-span-3 flex items-center justify-center">
                  <Image className=" w-[200px]" src={fbr} alt="pasha" />
                </div>
                <div className=" col-span-3 flex items-center justify-center">
                  {" "}
                  <Image className=" w-[230px]" src={fpcci} alt="pasha" />
                </div>
              </div>

              <div className=" grid grid-cols-10 items-center justify-between">
                <div className=" col-span-2 flex items-center justify-center">
                  {" "}
                  <Image className=" w-[200px]" src={meezan} alt="pasha" />
                </div>
                <div className=" col-span-2 flex items-center justify-center">
                  <Image className=" w-[180px]" src={pra} alt="pasha" />
                </div>
                <div className=" col-span-2 flex items-center justify-center">
                  {" "}
                  <Image className=" w-[130px]" src={prb} alt="pasha" />
                </div>
                <div className=" col-span-2 flex items-center justify-center">
                  {" "}
                  <Image className=" w-[100px]" src={secp} alt="pasha" />
                </div>
                <div className=" col-span-2 flex items-center justify-center">
                  <Image className=" w-[180px]" src={SRB} alt="pasha" />
                </div>
              </div>
              {/* {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="w-full1111 relative h-28 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0  "
      >
        <Image className=" object-contain" src={image} alt={name} fill />
      </a>
    </div>
  );
};
