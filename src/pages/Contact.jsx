import con2 from '../assets/con2.jpg';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="w-full h-full py-16">
      <div className="w-3/4 mx-auto justify-between">
        <h1 className="text-center text-4xl font-semibold">GET IN TOUCH</h1>
        <div className="grid md:grid-cols-2 py-16">
          <div className="flex justify-center md:justify-start">
            <img className="object-contain rounded-2xl shadow-lg shadow-orange-400" style={{ width: "100%", maxWidth: "400px" }} src={con2} alt='/' />
          </div>
          <div className="mt-8 md:mt-0 ">
            <div >
              <h1 className="font-bold text-2xl mb-8">Phone</h1>
              <p >+263 77 168 3034 <br/>+263 77 998 9613 <br/>+263 78 539 2020</p>
            </div>
            
            <div className="mt-8  ">
              <h1 className="font-bold text-2xl">Email</h1>
              <p className='mt-6'>
                <a href="mailto:info@michaeljordan.co.zw">info@michaeljordan.co.zw</a><br/> 
              </p>
            </div>
            
            <div className="mt-8 mb-8 ">
              <h1 className="font-bold text-2xl">Address</h1>
              <p className='mt-6'>
                Dema Complex Blue Shops,
                Norton
              </p>
            </div>
            
            <div className="mt-8 ">
              <h1 className="font-bold text-2xl">Socials</h1>
              <div className="flex gap-6 text-white mt-6">
                <div className="bg-gray-200 p-2 rounded-full bg-gradient-to-r from-orange-500 to-black">
                  <BiLogoFacebook size={30}/>
                </div>
                <div className="bg-gray-200 p-2 rounded-full bg-gradient-to-r from-orange-500 to-black">
                  <FaTwitter size={30} />
                </div>
                <div className="bg-gray-200 p-2 rounded-full bg-gradient-to-r from-orange-500 to-black">
                  <BsInstagram size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;