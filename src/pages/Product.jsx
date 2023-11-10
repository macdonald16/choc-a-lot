import React, { useState } from 'react';
import hy from '../assets/hy.png';
import milo from '../assets/milo.png';
import hj from '../assets/hj.png';

const Product = () => {
  const [visibleImages, setVisibleImages] = useState(4);

  const loadMoreImages = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 4);
  };

  return (
    <div className="w-full h-full py-16">
      <div className="w-3/4 mx-auto justify-between items-center text-center">
        <div>
          <h1 className="text-4xl font-semibold">Our Products</h1>
          <p className="pt-12 pb-8">
            Tantalize Your Taste Buds with Our Exquisite Snack Assortment. <br /> Experience the Perfect Balance of Flavors in Our Snacks.
          </p>

          <div className="grid md:grid-cols-4 gap-10">
            {[hy, milo, hj, hy, hy, milo, hj, hy].slice(0, visibleImages).map((image, index) => (
              <div className="border-double border-4 rounded-3xl italic font-semibold" key={index}>
                <img style={{ width: "25vh", display: "block", margin: "0 auto" }} src={image} alt="/" />
                <h1>Chocolates</h1>
              </div>
            ))}
          </div>

          {visibleImages < 8 && (
            <div className="flex justify-center mt-8">
              <button
                className="border rounded-tl-xl rounded-br-xl font-semibold bg-gradient-to-r from-orange-500 to-black text-white hover hover:text-black hover:border-[#F2921D] hover:bg-white py-2 px-4 mb-8"
                onClick={loadMoreImages}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;