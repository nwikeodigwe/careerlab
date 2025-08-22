import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-5 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <Link
              className="text-[#93adc8] text-base font-normal leading-normal min-w-40"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-[#93adc8] text-base font-normal leading-normal min-w-40"
              to="/explore"
            >
              Explore
            </Link>
            <Link
              className="text-[#93adc8] text-base font-normal leading-normal min-w-40"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-[#93adc8] text-base font-normal leading-normal min-w-40"
              to="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-[#93adc8] text-base font-normal leading-normal min-w-40"
              to="/privacy"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-[#93adc8]/50 text-sm font-normal leading-normal">
            © 2024 CareerLabs. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
