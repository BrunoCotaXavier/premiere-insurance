import Carousel from "@/components/carousel";
import Link from "next/link";

export default function IndexApp() {
  return (
    <div className="bg-black">
      <div className="background-image"></div>
      <div className="sm:pt-60 pt-40"></div>
      <div className="glass flex flex-row items-center justify-center w-full">
        <div>
          <h1 className="sm:text-40 text-30">BOSTON INSURANCE</h1>
          <h2 className="sm:text-25 text-15">Best coverage, grate rates</h2>
        </div>
        <div className="flex flex-col p-5">
          <div className="sm:pb-2 pb-4">
            <Link href="/services" className="btn-primary lusitana-regular">REQUEST</Link>
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
            <h1 className="primary-color text-25">Choice</h1>
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
            <h1 className="primary-color text-25">Experience</h1>
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
            <h1 className="primary-color text-25">Service</h1>
            <span className="primary-color text-15">
              We work with a wide range of high-quality,
              reliable insurance companies and can provide coverage
              options for any business or personal insurance need.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 flex items-center justify-center">
        <hr className="second-custon-border rounded w-40" />
      </div>

      <div className="bg-white pb-10 pt-10">
        <Carousel />
      </div>

    </div>
  );
}
