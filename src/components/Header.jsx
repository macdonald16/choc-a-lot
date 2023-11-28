import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    // Replace 'your-phone-number' with your actual phone number
    const phoneNumber = '+263719877509';
    const message = 'Hello, I have a question.';
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full h-full px-4 py-4">
      <div className="max-w-[1240px] mx-auto justify-between items-center">
        <div className="flex items-center justify-between border-b border-b-[#F0A500] pb-4">
          <div className="flex items-center">
            <img src={logo} alt="/" style={{ width: '20%', height: 'auto' }} />
            <span className="text-xl border-b-[#F2921D] border-b" style={{ marginLeft: '10px' }}>
              Ch<span className="text-[#F0A500]">o</span>c <span className="text-[#F0A500]">a</span> L
              <span className="text-[#F0A500]">o</span>t
            </span>
          </div>
          <div className="md:hidden">
            <button className="text-[#F2921D]" onClick={handleMenuToggle}>
              <HiOutlineMenuAlt1 size={30} />
            </button>
          </div>
          <ul className="hidden md:flex gap-8 text-xl">
            <li>
              <Link to="/" className="nav-link border-b border-white hover:border-orange-500">Home</Link>
            </li>
            <li>
              <Link to="/product" className="nav-link border-b border-white hover:border-orange-500">Product</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link border-b border-white hover:border-orange-500">Contact</Link>
            </li>
          </ul>
          <button
            className="hidden md:flex items-center gap-2 text-xl border border-[#F2921D] rounded-tl-xl rounded-br-xl py-1 px-4"
            onClick={handleWhatsAppClick}
          >
            <IoLogoWhatsapp className="text-green-500" />
            Lets Chat
          </button>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 text-xl">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/product" className="nav-link">Product</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li>
              <button className="text-xl border gap-2 border-[#F2921D] flex rounded-full py-1 px-4" onClick={handleWhatsAppClick}>
                <IoLogoWhatsapp className="text-green-500" />
                 Lets Chat 
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;