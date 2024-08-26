import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#021526] text-white py-8 md:py-10 px-6 md:px-40">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b-2 border-[#021526] md:border-b-2 md:border-green-900">
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          {/* <div className="flex gap-4">
            <Link href="https://web.facebook.com/kreemoholdings?_rdc=rdr">
              <FaFacebook className="text-3xl text-blue-500 hover:text-slate-400 transition-colors duration-200" />
            </Link>
            <Link href="#">
              <BsTwitterX className="text-3xl text-blue-100 hover:text-slate-400 transition-colors duration-200" />
            </Link>
            <Link href="#">
              <img
                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity duration-200"
                src="/instagram.png"
                alt="Instagram"
              />
            </Link>
          </div> */}

          {/* Address */}
          <div className="flex items-center border-b-2 border-green-900 md:border-b-2 md:border-[#021526] py-6 md:py-8 gap-1 md:gap-4">
            <FaLocationDot className="text-2xl md:text-3xl" />
            <p className="text-slate-400 text-center md:text-left">
              30 N Gould St Ste R, Sheridan, WY 82801, USA
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center pr-0 md:pr-40 md:text-right mt-0 md:mt-0">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Kreenox Engineering. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
