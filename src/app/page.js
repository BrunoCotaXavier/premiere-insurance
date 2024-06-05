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
          <h1 className="sm:text-30 text-25 font-bold">MASSACHUSETTS INSURANCE</h1>
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
          <h1 className="text-30 primary-color bold">Massachusetts Brokerage Insurance Associates Local, Independent, Trusted.</h1>
          <span className="text-15">
            Massachusetts Brokerage Insurance Associates delivers a unique experience,
            with a belief that every customer deserves our focused attention and personal service.
            Our Massachusetts-based auto insurance agency provides all types of insurance coverage.
          </span>
        </div>
      </div>

      <div className="bg-white flex sm:flex-row flex-col items-center justify-around p-5">
        <div className="drop-shadow w-full rounded p-5 m-5 flex items-start">
          <img className="pr-5" src="/images/icon-check.svg" />
          <div>
            <h1 className="primary-color text-25 font-bold">Choice</h1>
            <span className="primary-color text-15">
              We collaborate with a broad selection of reputable insurance firms, delivering coverage solutions to address any business or personal insurance requirement.
            </span>
          </div>
        </div>
        <div className="drop-shadow w-full rounded p-5 m-5 flex items-start">
          <img className="pr-5" src="/images/icon-trophy.svg" />
          <div>
            <h1 className="primary-color text-25 font-bold">Experience</h1>
            <span className="primary-color text-15">
              With years of industry experience, our team provides expert advice to assist you in making informed insurance decisions for yourself, your family, or your business.
            </span>
          </div>
        </div>
        <div className="drop-shadow w-full rounded p-5 m-5 flex items-start">
          <img className="pr-5" src="/images/icon-service.svg" />
          <div>
            <h1 className="primary-color text-25 font-bold">Service</h1>
            <span className="primary-color text-15">
              We treat our customers like family, offering support whenever you need it, whether it's to provide a quote, assist with a claim, enhance your coverage, or simply address any questions you may have.
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
        <div className="p-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Insurance Associates</h1>
          <span className="primary-color sm:text-20">
            We continuously provide the personalized insurance coverage you require. When it comes to providing Boston auto insurance or other types of insurance for you and your family, Massachusetts Brokerage Insurance Associates is the number one choice in Massachusetts.
            <br />
            <br />
            Massachusetts Brokerage Insurance Associates (MBIA) is a local Boston insurance broker providing home, auto, life, and corporate insurance products. Our commitment to providing top-rated coverage at affordable rates is just one of the many reasons more people and businesses turn to us for their insurance needs.
          </span>
        </div>
        <div className="pt-10 p-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Auto Insurance</h1>
          <span className="primary-color sm:text-20">
            Have a vehicle that needs the best coverage at the lowest rates? Get in touch with our local auto insurance brokers to find a deal that’s just right for you. We continuously rank as the best car insurance broker in the state because we work hard to find the most comprehensive coverage for personal vehicles and commercial fleets. Our attention to detail and exceptional customer service makes us one of the elite commercial auto insurance companies in Massachusetts.
          </span>
        </div>
        <div className="pt-10 p-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Complete Insurance</h1>
          <span className="primary-color sm:text-20">
            Our services go far beyond auto insurance coverage. Did you know we are a home insurance broker and a corporate insurance broker? Whatever insurance product you need for your business or stage in life, our brokers work with you to create a level of coverage that protects you in all areas of life.
            <br/>
            <br/>
            To learn more about what makes us one of the best insurance brokers in the state of Massachusetts, give us a call. Get your free insurance quote today!
          </span>
        </div>
      </div>

    </div>
  );
}
