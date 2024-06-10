import Form from "@/components/form";

export default function Auto() {
  return (
    <div>
      <div className="relative">
        <div className="background-image-service"></div>
        <div className="flex flex-col items-center justify-center relative z-10 sm:pt-20 pt-10">
          <h1 className="text-40 text-white text-center text-with-shadow">INSURANCE PRODUCTS</h1>
          <div className="flex text-30 text-white p-1">
            <p className="p-1 text-with-shadow">AUTO INSURANCE</p>
          </div>
        </div>
      </div>
      <div className="bg-third-color w-full flex items-center justify-center">
        <div className="w-600 flex items-center justify-start">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5 pt-20">Personal Information</h1>
        </div>
      </div>
      <Form product={"AUTO"} />
    </div>
  );
}
