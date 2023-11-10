import cookie from '../assets/cookie.jpg';
import catalogPdf from '../assets/catalog.pdf';
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const Hero = () => {
  const handleViewCatalogClick = () => {
    // Code to trigger file download
    const link = document.createElement('a');
    link.href = catalogPdf;
    link.setAttribute('download', 'catalog.pdf');
    link.click();
  };

  return (
    <div className="w-full h-full py-16">
      <div className="max-w-[1240px] mx-auto justify-between items-center">
        <div className="grid md:grid-cols-2">
          <div className="text-center justify-between">
            <h1 className="text-4xl ">
              <span className="text-[#FFA351]">Choc a Lot</span> <br />Fuel Your Cravings!
            </h1>
            <p className="pt-6 pb-8 text-sm sm:text-md">
              A Snack Haven with Irresistible Delights. Tantalize your taste buds with our scrumptious treats, from savory bites to sweet temptations. Embrace the joy of snacking with quality ingredients, friendly service, and a warm ambiance. Your snack cravings meet their match at Choc a Lot.
            </p>
            <button className="border rounded-tl-xl rounded-br-xl font-semibold bg-gradient-to-r from-orange-500 to-black text-white hover hover:text-black hover:border-[#F2921D] hover:bg-white py-2 px-4 mb-8" onClick={handleViewCatalogClick}>View Catalog</button>

            <div className="border border-[#F0A500] rounded-xl w-full md:w-3/4 py-8 ms-0 md:ms-11 text-sm sm:text-md px-4 bg-[#F0A500] italic font-bold shadow-md shadow-[#BB371A] bg-opacity-50">
              <p>
                For all your wholesale and retail delicious snacks, chocolates, spreads, chips, and food packages (Red and Blue cups). Don't hesitate to come through and check it out at Choc A Lot.
              </p>
              
            </div>
            <div className='grid grid-cols-3 mt-10 border-b border-t py-6 border-b-[#F0A500] border-t-[#F0A500]'>
            <div >
              <h1 className='text-2xl font-semibold'><span className='text-3xl font-semibold'>300</span>+</h1>
              <p>customers</p>
            </div>
            <div>
              <h1 className='text-2xl font-semibold'><span className='text-3xl font-semibold'>24/7</span></h1>
              <p>Availability</p>
            </div>
            <div className='mt-2'>
              <h1 className='flex text-center items-center justify-center'><span><AiFillStar/></span><span><AiFillStar/></span><span><AiFillStar/></span><span><AiFillStar/></span><span><BsStarHalf/></span></h1>
              <p className='mt-2'>Rating</p>
            </div>
            

            </div>
          </div>
          <div className="flex justify-center mt-4">
            <img className="object-contain rounded-2xl shadow-lg shadow-orange-400" style={{ width: "100%", maxWidth: "400px" }} src={cookie} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;