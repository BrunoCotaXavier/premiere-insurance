import Carousel from "@/components/carousel";
import PrimaryButton from "@/components/primary-button";
import SectionProduct from "@/components/section-product";
import Link from "next/link";

export default function IndexApp() {
  return (
    <div className="bg-black">
      <div class="z-50 pb-5 fixed bottom-0 w-full flex justify-end balance">
        <a target="_blank" href="https://wa.me/19782210139">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="#00D408" viewBox="0 0 256 256">
            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
          </svg>
        </a>
      </div>
      <div className="background-image"></div>
      <div className="sm:pt-60 pt-40"></div>

      <div className="glass flex sm:flex-row flex-col items-start justify-center w-full">
        <div>
          <h1 className="text-30 font-bold">Massachusetts and New Hampshire Insurance</h1>
          <h2 className="sm:text-25 text-15">Best coverage, grate rates</h2>
        </div>
        <div className="flex flex-col  sm:p-5 pt-5">
          <div className="sm:pb-2 pb-4">
            <PrimaryButton url={"/services"} />
          </div>
          <div>
            <Link href="/about" className="btn-second lusitana-regular">LEARN +</Link>
          </div>
        </div>
      </div>

      <div className="bg-white h-full p-5 mt-20 w-full flex items-center justify-center">
        <div className="max-w-xl pb-10">
          <h1 className="text-30 primary-color bold">Premiere Insurance Local, Independent, Trusted.</h1>
          <span className="text-15">
            Premiere Insurance delivers a unique experience,
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
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Business Insurance</h1>
          <span className="primary-color sm:text-20">
            As a business owner, you need assurance that your business is covered. Our commercial business insurance offers comprehensive protection, including property, liability, and workers' compensation, all under one policy. Whether you own or rent your space, our tailored coverage ensures your peace of mind. Premiere Insurance Agency understands your unique needs and provides customized protection plans.
            Don't overlook the importance of commercial insurance for your business's security. Contact us today to discuss your specific requirements.
            <br />
            <br />
          </span>
        </div>
        <div className="pt-10 p-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Auto Insurance</h1>
          <span className="primary-color sm:text-20">
            Have a vehicle that needs the best coverage at the lowest rates? Get in touch with our local auto insurance brokers to find a deal that’s just right for you. We continuously rank as the best car insurance broker in the state because we work hard to find the most comprehensive coverage for personal vehicles and commercial fleets. Our attention to detail and exceptional customer service makes us one of the elite commercial auto insurance companies in Massachusetts.
          </span>
        </div>
        <div className="pt-10 p-10 sm:pl-40 sm:pr-40">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5">Homeowners Insurance</h1>
          <span className="primary-color sm:text-20">
            Ensuring the protection of your tangible assets necessitates the acquisition of a comprehensive homeowners insurance policy, applicable whether you are a homeowner or a tenant in a house or apartment. Such a policy is designed to indemnify you in the event of personal property damage resulting from fires or other catastrophic events. Moreover, it serves as a primary defense against potential litigation stemming from injuries sustained by individuals visiting your residence.
            <br />
            <br />
            The cost of this indispensable coverage is contingent upon numerous rating factors, while its efficacy hinges upon the reputation of the insurer and the nature of the policy, whether structured as named perils or all-risk. Under a named-perils policy, only explicitly outlined losses are covered, whereas an all-risk policy extends coverage unless a peril is expressly excluded. The latter provides broader protection, with the burden of proof resting on the carrier, thus ensuring peace of mind for policyholders in the event of a loss.
          </span>
        </div>
      </div>

    </div>
  );
}
