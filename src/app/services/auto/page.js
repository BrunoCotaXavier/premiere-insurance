
export default function Auto() {
  return (
    <section>
      <div className="relative">
        <div className="background-image-service"></div>
        <div className="flex flex-col items-center justify-center relative z-10 sm:pt-20 pt-10">
          <h1 className="text-40 text-white text-center text-with-shadow">INSURANCE PRODUCTS</h1>
          <div className="flex text-30 text-white p-1">
            <p className="p-1 text-with-shadow">AUTO INSURANCE</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-30 primary-color second-custon-border w-max mb-5 pt-10">Insurance Associates</h1>
          <label>First & Last Name *</label>
          <input name="name" value=""/>
        </div>
      </div>
    </section>
  );
}
