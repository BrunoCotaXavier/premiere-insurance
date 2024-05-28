import SectionProduct from "@/components/section-product";

export default function Service() {
    return (
        <div>
            <div className="relative">
                <div className="background-image-service"></div>
                <div className="flex flex-col items-center justify-center relative z-10 sm:pt-20 pt-10">
                    <h1 className="text-40 text-white text-center text-with-shadow">INSURANCE PRODUCTS</h1>
                    <div className="flex text-30 text-white p-1">
                        <p className="p-1 text-with-shadow">Auto</p>
                        <p className="pt-1 text-with-shadow">/</p>
                        <p className="p-1 text-with-shadow">Home</p>
                        <p className="pt-1 text-with-shadow">/</p>
                        <p className="p-1 text-with-shadow">Business</p>
                    </div>
                </div>
            </div>
            <div className="pt-10">
                <SectionProduct />
            </div>
        </div>
    );
}