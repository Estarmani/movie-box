import { FaAppStoreIos, FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiMicrosoftstore } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black pl-10 pr-10 text-white p-4">
      <div className=" text-sm">
        <a href="#" className="mr-4">Home</a>
        <a href="#" className="mr-4">Terms and Conditions</a>
        <a href="#" className="mr-4">Privacy Policy</a>
        <a href="#" className="mr-4">Collection Statement</a>
        <a href="#" className="mr-4">Help</a>
        <a href="#">Manage Account</a>
      </div>
      <p className="mb-4 text-sm">Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
        <FaFacebookF size={30} />
        <FaTwitter size={30} />
        <FaInstagramSquare size={30} />
        </div>
        <div className="flex space-x-4 text-sm">
          <FaAppStoreIos size={20} />
          <IoLogoGooglePlaystore size={20}/>
          <SiMicrosoftstore size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;