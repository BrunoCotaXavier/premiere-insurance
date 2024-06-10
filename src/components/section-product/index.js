import PrimaryButton from "../primary-button";
import SecondButton from "../second-button";

export default function SectionProduct() {
    return (
        <div className="bg-white flex sm:flex-row flex-col items-stretch justify-between p-10 sm:pl-40 sm:pr-40">
            <div className="sm:max-w-260 pb-5 flex flex-col">
                <img className="w-full h-auto" src="/images/auto.png" />
                <h1 className="pt-3 sm:font-thin font-bold text-30 primary-color">Auto insurance</h1>
                <span className="text-20 primary-color pb-5">
                    We specialize in locating affordable and comprehensive auto insurance policies. Reach out for a quote, and allow us to tailor the perfect coverage for your needs.
                </span>
                <SecondButton url={"/services/auto"} />
            </div>
            <div className="sm:max-w-260 pb-5 flex flex-col">
                <img className="w-full h-auto" src="/images/home.png" />
                <h1 className="pt-3 sm:font-thin font-bold text-30 primary-color">Home Insurance</h1>
                <span className="text-20 primary-color pb-5">
                    Homeowners insurance rates in Massachusetts can fluctuate significantly. We ensure you receive adequate coverage at the most competitive rates possible.
                </span>
                <SecondButton url={"/services/home"} />
            </div>
            <div className="sm:max-w-260 pb-5 flex flex-col">
                <img className="w-full h-auto" src="/images/business.png" />
                <h1 className="pt-3 sm:font-thin font-bold text-30 primary-color">Business Insurance</h1>
                <span className="text-20 primary-color pb-5">
                    Allow us to assess your Massachusetts business insurance requirements. Having the right coverage is crucial to protect your business when you need it most.
                </span>
                <SecondButton url={"/services/business"} />
            </div>
        </div>
    );
}