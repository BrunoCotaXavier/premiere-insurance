import Link from "next/link";

export default function TabBottom() {
    return (
        <div title="About Us" className="bg-primary-color flex sm:flex-row flex-col text-white">
            <section className="p-10 w-full">
                <h1 className="text-30">About Us</h1>
                <div className="flex">
                    <hr className="green-custon-border w-2/3" />
                    <hr className="second-custon-border w-full" />
                </div>
                <div className="pt-2">
                    <span className="text-15">
                        Massachusetts Brokerage Insurance Associates is an independent insurance agency located in Boston, MA. Give us a call, stop by, or request a quote online to find out how much we can save you on your insurance.
                        <br />
                        <br />
                        Massachusetts TOP #01
                    </span>
                </div>
                <hr className="thrid-custon-border" />
                <div className="flex w-full justify-around text-13 p-1">
                    <Link href="/">Home</Link>
                    <p className="thrid-custon-border-r" ></p>
                    <Link href="/about">About</Link>
                    <p className="thrid-custon-border-r" ></p>
                    <Link href="/contact">Contact</Link>
                </div>
            </section>

            <section title="Quick Links" className="p-10 w-full">
                <h1 className="text-30">Quick Links</h1>
                <div className="flex">
                    <hr className="green-custon-border w-2/3" />
                    <hr className="second-custon-border w-full" />
                </div>
                <div className="pt-2">
                    <Link href="/about" className="flex w-full justify-between">
                        <p className="p-1 text-15">Abou Us</p>
                        <img src="/images/icon-arrow.svg" />
                    </Link>
                    <hr className="thrid-custon-border" />
                    <Link href="/services/auto" className="flex w-full justify-between">
                        <p className="p-1 text-15">Auto insurance</p>
                        <img src="/images/icon-arrow.svg" />
                    </Link>
                    <hr className="thrid-custon-border" />
                    <Link href="/services/business" className="flex w-full justify-between">
                        <p className="p-1 text-15">Business Insurance</p>
                        <img src="/images/icon-arrow.svg" />
                    </Link>
                    <hr className="thrid-custon-border" />
                    <Link href="/services/home" className="flex w-full justify-between">
                        <p className="p-1 text-15">Home Insurance</p>
                        <img src="/images/icon-arrow.svg" />
                    </Link>
                    <hr className="thrid-custon-border" />
                    <Link href="/contact" className="flex w-full justify-between">
                        <p className="p-1 text-15">Contact Us</p>
                        <img src="/images/icon-arrow.svg" />
                    </Link>
                    <hr className="thrid-custon-border" />
                    <Link href="/" className="flex w-full justify-between">
                        <p className="p-1 text-15">Home</p>
                        <img src="/images/icon-arrow.svg" />
                    </Link>
                    <hr className="thrid-custon-border" />
                </div>
            </section>

            <section title="Contact Us" className="p-10 w-full">
                <h1 className="text-30">Contact Us</h1>
                <div className="flex">
                    <hr className="green-custon-border w-2/3" />
                    <hr className="second-custon-border w-full" />
                </div>
                <div className="pt-2">
                    <div className="flex w-full justify-start">
                        <img src="/images/icon-email.svg" />
                        <p className="p-1 text-15">contact@PremiereInsurance.com</p>
                    </div>
                    <div className="flex w-full justify-start">
                        <img src="/images/icon-location.svg" />
                        <p className="p-1 text-15">116 Union St, Clinton, MA 01510, United States</p>
                    </div>
                    <div className="flex w-full justify-start pb-2">
                        <img src="/images/icon-telephone.svg" />
                        <p className="p-1 text-15">978-733-1548</p>
                    </div>
                    <hr className="thrid-custon-border" />
                    <div className="flex w-full justify-start pt-2">
                        <img src="/images/icon-location.svg" />
                        <p className="p-1 text-15">7 summer st #19 - Chelmsford MA 01824s</p>
                    </div>
                    <div className="flex w-full justify-start">
                        <img src="/images/icon-telephone.svg" />
                        <p className="p-1 text-15">978-221-0139</p>
                    </div>
                </div>
            </section>
        </div>
    );
}