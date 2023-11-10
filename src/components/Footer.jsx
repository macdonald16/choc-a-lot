import { BiLogoFacebook } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineArrowUp,AiOutlineCopyrightCircle } from 'react-icons/ai'; // Import the arrow up icon

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full h-full bg-black py-16">
      <div className="w-11/12 mx-auto justify-between items-center text-center text-white">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-2xl text-left mb-4">
              We Serve The Best <br/> For You.
            </h1>
          </div>
          <div className="gap-11 grid md:grid-cols-3">
            <div className='text-left'>
              <h1 className='mb-4'>Best Quality</h1>
              <p>Sweetness in every bite</p>
            </div>
            <div className='text-left'>
              <h1 className='mb-4'>Choc a Lot</h1>
              <p>Home <br/>Products <br/>Contacts</p>
            </div>
            <div className='text-left'>
            <h1 className='mb-4 flex gap-2'><span className=''><AiOutlineCopyrightCircle/></span>All rights reserved.</h1>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 border border-orange-600 shadow-md shadow-orange-500 mt-4  text-black flex justify-end rounded-tr-lg rounded-br-lg gap-8">
          <div className="p-2 rounded-full hover:text-blue-600">
            <BiLogoFacebook size={20}/>
          </div>
          <div className="p-2 rounded-full hover:text-green-600">
            <IoLogoWhatsapp size={20}/>
          </div>
          <div className="p-2 rounded-full">
            <FaTwitter size={20} />
          </div>
          <div className="p-2 rounded-full mr-4">
            <BsInstagram size={20} />
          </div>
          <div className="bg-black text-white rounded-full p-2">
            <AiOutlineArrowUp size={20} onClick={scrollToTop} style={{ cursor: 'pointer' }} />
          </div>
        </div>
        
        <div className='mt-8 flex justify-end items-end'>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;