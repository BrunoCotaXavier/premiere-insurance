import Carousel from "@/components/carousel";
import PrimaryButton from "@/components/primary-button";
import SectionProduct from "@/components/section-product";
import Link from "next/link";

export default function IndexApp() {
  return (
    <div className="bg-black">
      <div className="background-image"></div>
      <div className="sm:pt-60 pt-40"></div>
      <div className="glass flex flex-row items-center justify-center w-full">
        <div>
          <h1 className="sm:text-40 text-30 font-bold">BOSTON INSURANCE</h1>
          <h2 className="sm:text-25 text-15">Best coverage, grate rates</h2>
        </div>
        <div className="flex flex-col p-5">
          <div className="sm:pb-2 pb-4">
            <PrimaryButton url={"/services"} />
          </div>
          <div>
            <Link href="/" className="btn-second lusitana-regular">LEARN +</Link>
          </div>
        </div>
      </div>
      <div className="bg-white h-full p-5 mt-20 w-full flex items-center justify-center">
        <div className="max-w-xl pb-10">
          <h1 className="text-30 primary-color bold">Boston Brokerage Insurance Associates Local, Independent, Trusted.</h1>
          <span className="text-15">
            Boston Brokerage Insurance Associates delivers a unique experience,
            with a belief that every customer deserves our focused attention and personal service.
            Our Boston-based auto insurance agency provides all types of insurance coverage.
          </span>
        </div>
      </div>

      <div className="bg-white flex sm:flex-row flex-col items-center justify-around p-5">
        <div className="drop-shadow rounded p-5 m-5 flex items-start">
          <img className="pr-5" src="/images/icon-check.svg" />
          <div>
            <h1 className="primary-color text-25 font-bold">Choice</h1>
            <span className="primary-color text-15">
              We work with a wide range of high-quality,
              reliable insurance companies and can provide coverage
              options for any business or personal insurance need.
            </span>
          </div>
        </div>
        <div className="drop-shadow rounded p-5 m-5 flex items-start">
          <img className="pr-5" src="/images/icon-trophy.svg" />
          <div>
            <h1 className="primary-color text-25 font-bold">Experience</h1>
            <span className="primary-color text-15">
              We work with a wide range of high-quality,
              reliable insurance companies and can provide
              coverage options for any business or personal insurance need.
            </span>
          </div>
        </div>
        <div className="drop-shadow rounded p-5 m-5 flex items-start">
          <img className="pr-5" src="/images/icon-service.svg" />
          <div>
            <h1 className="primary-color text-25 font-bold">Service</h1>
            <span className="primary-color text-15">
              We work with a wide range of high-quality,
              reliable insurance companies and can provide coverage
              options for any business or personal insurance need.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white w-full p-5 flex items-center justify-center">
        <hr className="second-custon-border rounded w-120" />
      </div>

      <div className="bg-white pt-10">
        <Carousel />
      </div>

      <div className="bg-white">
        <div className="pt-10 pl-10 sm:pl-40">
          <h1 className="text-30 primary-color second-custon-border w-max">Insurance We Offer</h1>
        </div>
        <SectionProduct />
      </div>

      <div className="bg-white pb-10">
        <div className="pl-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Insurance Associates</h1>
          <span className="primary-color sm:text-20">
            We continuously provide the personalized insurance coverage you require. When it comes to providing San Diego auto insurance
            or other types of insurance for you and your family, California Brokerage Insurance Associates is the number one choice in California.
            California Brokerage Insurance Associates (CBIA) is a local San Diego insurance broker providing home, auto, life,
            and corporate insurance products. Our commitment to providing top-rated coverage at affordable rates is just one of the many
            reasons more people and businesses turn to us for their insurance needs.
          </span>
        </div>
        <div className="pt-10 pl-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Insurance Associates</h1>
          <span className="primary-color sm:text-20">
            We continuously provide the personalized insurance coverage you require. When it comes to providing San Diego auto insurance
            or other types of insurance for you and your family, California Brokerage Insurance Associates is the number one choice in California.
            California Brokerage Insurance Associates (CBIA) is a local San Diego insurance broker providing home, auto, life,
            and corporate insurance products. Our commitment to providing top-rated coverage at affordable rates is just one of the many
            reasons more people and businesses turn to us for their insurance needs.
          </span>
        </div>
        <div className="pt-10 pl-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Insurance Associates</h1>
          <span className="primary-color sm:text-20">
            We continuously provide the personalized insurance coverage you require. When it comes to providing San Diego auto insurance
            or other types of insurance for you and your family, California Brokerage Insurance Associates is the number one choice in California.
            California Brokerage Insurance Associates (CBIA) is a local San Diego insurance broker providing home, auto, life,
            and corporate insurance products. Our commitment to providing top-rated coverage at affordable rates is just one of the many
            reasons more people and businesses turn to us for their insurance needs.
          </span>
        </div>
      </div>

    </div>
  );
}
