import PrimaryButton from "../primary-button";

export default function SectionProduct() {
    return (
        <div className="bg-white flex sm:flex-row flex-col items-center justify-between p-10 sm:pl-40 sm:pr-40">
            <div className="sm:max-w-260 pb-5 flex flex-col">
                <img className="w-full h-auto" src="/images/auto.png" />
                <h1 className="text-30 primary-color">Auto insurance</h1>
                <span className="text-20 primary-color pb-5">
                    We're experts in finding affordable and complete auto insurance.
                    Request a quote and let us find the right coverage for you.
                </span>
                <PrimaryButton url={"/services/auto"} />
            </div>
            <div className="sm:max-w-260 pb-5 flex flex-col">
                <img className="w-full h-auto" src="/images/home.png" />
                <h1 className="text-30 primary-color">Home Insurance</h1>
                <span className="text-20 primary-color pb-5">
                    San Diego homeowner insurance rates can vary widely.
                    We'll make sure you're properly covered at the lowest rate available.
                </span>
                <PrimaryButton url={"/services/home"} />
            </div>
            <div className="sm:max-w-260 pb-5 flex flex-col">
                <img className="w-full h-auto" src="/images/business.png" />
                <h1 className="text-30 primary-color">Business Insurance</h1>
                <span className="text-20 primary-color pb-5">
                    Let us review your San Diego business insurance needs.
                    It's vital for your business to have the proper coverage in case you ever need it.
                </span>
                <PrimaryButton url={"/services/business"} />
            </div>
        </div>
    );
}