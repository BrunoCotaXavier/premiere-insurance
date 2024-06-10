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
                        Premiere Insurance is an independent insurance agency located in Massachusetts, MA. Give us a call, stop by, or request a quote online to find out how much we can save you on your insurance.
                        <br />
                        <br />
                    </span>
                </div>
                <hr className="thrid-custon-border" />
                <div className="flex w-full justify-around text-13 p-1">
                    <a target="_blank" href="https://wa.me/19782210139">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="#787878" viewBox="0 0 256 256">
                            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                        </svg>
                    </a>
                    <p className="thrid-custon-border-r" ></p>
                    <a target="_blank" href="https://www.instagram.com/premiereadvisorsinc/">
                        <svg width="30" height="30" viewBox="0 0 87 87" fill="#787878" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.1061 7.20703H58.3741C69.9048 7.20703 79.2735 16.5757 79.2735 28.1064V58.3744C79.2735 63.9172 77.0716 69.233 73.1522 73.1524C69.2328 77.0718 63.917 79.2737 58.3741 79.2737H28.1061C16.5755 79.2737 7.20679 69.905 7.20679 58.3744V28.1064C7.20679 22.5635 9.40868 17.2477 13.3281 13.3283C17.2474 9.40892 22.5633 7.20703 28.1061 7.20703ZM27.3855 14.4137C23.9451 14.4137 20.6456 15.7804 18.2129 18.2131C15.7801 20.6458 14.4135 23.9453 14.4135 27.3857V59.095C14.4135 66.2657 20.2148 72.067 27.3855 72.067H59.0948C62.5352 72.067 65.8347 70.7003 68.2674 68.2676C70.7001 65.8349 72.0668 62.5354 72.0668 59.095V27.3857C72.0668 20.2151 66.2654 14.4137 59.0948 14.4137H27.3855ZM62.1576 19.8187C63.3522 19.8187 64.4979 20.2932 65.3425 21.1379C66.1872 21.9826 66.6618 23.1283 66.6618 24.3229C66.6618 25.5174 66.1872 26.6631 65.3425 27.5078C64.4979 28.3525 63.3522 28.827 62.1576 28.827C60.963 28.827 59.8174 28.3525 58.9727 27.5078C58.128 26.6631 57.6535 25.5174 57.6535 24.3229C57.6535 23.1283 58.128 21.9826 58.9727 21.1379C59.8174 20.2932 60.963 19.8187 62.1576 19.8187ZM43.2401 25.2237C48.0184 25.2237 52.601 27.1219 55.9798 30.5007C59.3586 33.8794 61.2568 38.462 61.2568 43.2404C61.2568 48.0187 59.3586 52.6013 55.9798 55.9801C52.601 59.3589 48.0184 61.257 43.2401 61.257C38.4618 61.257 33.8792 59.3589 30.5004 55.9801C27.1216 52.6013 25.2235 48.0187 25.2235 43.2404C25.2235 38.462 27.1216 33.8794 30.5004 30.5007C33.8792 27.1219 38.4618 25.2237 43.2401 25.2237ZM43.2401 32.4304C40.3731 32.4304 37.6236 33.5693 35.5963 35.5965C33.569 37.6238 32.4301 40.3734 32.4301 43.2404C32.4301 46.1074 33.569 48.8569 35.5963 50.8842C37.6236 52.9115 40.3731 54.0504 43.2401 54.0504C46.1071 54.0504 48.8567 52.9115 50.8839 50.8842C52.9112 48.8569 54.0501 46.1074 54.0501 43.2404C54.0501 40.3734 52.9112 37.6238 50.8839 35.5965C48.8567 33.5693 46.1071 32.4304 43.2401 32.4304Z" fill="#787878" />
                        </svg>

                    </a>
                    <p className="thrid-custon-border-r" ></p>
                    <a target="_blank" href="https://www.linkedin.com/company/premiere-advisors/">
                        <svg width="30" height="30" viewBox="0 0 95 94" fill="#787878" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.4817 19.5833C27.4807 21.6609 26.6544 23.6529 25.1846 25.1212C23.7149 26.5895 21.722 27.4138 19.6445 27.4128C17.567 27.4117 15.5749 26.5854 14.1066 25.1157C12.6383 23.6459 11.814 21.653 11.8151 19.5755C11.8161 17.498 12.6424 15.506 14.1122 14.0377C15.5819 12.5694 17.5748 11.7451 19.6523 11.7461C21.7298 11.7471 23.7219 12.5734 25.1902 14.0432C26.6585 15.513 27.4828 17.5058 27.4817 19.5833ZM27.7167 33.2133H12.0501V82.25H27.7167V33.2133ZM52.4701 33.2133H36.8817V82.25H52.3134V56.5175C52.3134 42.1825 70.9959 40.8508 70.9959 56.5175V82.25H86.4667V51.1908C86.4667 27.025 58.8151 27.9258 52.3134 39.7933L52.4701 33.2133Z" fill="#787878" />
                        </svg>
                    </a>
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
                        <p className="p-1 text-15">About Us</p>
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
                        <p className="p-1 text-15">joao@premiereadvisors.com</p>
                    </div>
                    <div className="flex w-full justify-start">
                        <img src="/images/icon-email.svg" />
                        <p className="p-1 text-15">Gustavo@premiereadvisors.com</p>
                    </div>
                    <hr className="thrid-custon-border" />
                    <div className="flex w-full justify-start pt-2">
                        <img src="/images/icon-location.svg" />
                        <p className="p-1 text-15">7 summer st #19 - Chelmsford MA 01824</p>
                    </div>
                    <div className="flex w-full justify-start">
                        <img src="/images/icon-telephone.svg" />
                        <p className="p-1 text-15">978-221-0139</p>
                    </div>
                    <hr className="thrid-custon-border" />
                    <div className="flex w-full justify-start">
                        <img src="/images/icon-location.svg" />
                        <p className="p-1 text-15">116 Union St, Clinton, MA 01510, United States</p>
                    </div>
                    <div className="flex w-full justify-start pb-2">
                        <img src="/images/icon-telephone.svg" />
                        <p className="p-1 text-15">978-733-1548</p>
                    </div>
                </div>
            </section>
        </div>
    );
}