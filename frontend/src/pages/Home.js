// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assest/bg.png';
import nike from '../assest/nike.png';
import acm from '../assest/acm.png';
import fb from '../assest/fb.png';
import sn from '../assest/sn.png';
import ContactUs from './cont';



const Home = () => {
  return (
    <div className="w-[1440px] h-full flex flex-col gap-10">
      <section className="relative w-full overflow-hidden h-[726px] px-28 flex items-center justify-between gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="flex gap-6 relative">
              <span className="text-slate-900 text-6xl font-bold">Past</span>
              <span className="bg-gradient-to-r from-orange-300 to-indigo-600 bg-clip-text text-transparent text-6xl font-bold">
                Pitch
              </span>
            </h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-2xl text-bold text-brown-600" style={{ padding: '0 10px' }}>
                This is Football Heritage.
              </span>
              <br />
              <Link
                to="/club"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold mr-24 hover:bg-orange-200 transition duration- text-left"
              >
                Shop Now
              </Link>
            </h1>
          </div>
        </div>

        <div className="relative w-[622px] h-[434px] overflow-hidden">
          <img
            src={bg}
            alt="Football"
            className="object-cover h-full w-full rounded-l-full rounded-r-full"
          />
        </div>
      </section>
      <h1 className="text-3xl text-center font-bold mb-8">Collection</h1>
  <section className="relative w-full overflow-hidden h-[726px] px-28 flex items-center justify-between gap-5">
  <div className="relative h-full flex items-center justify-between w-full">
    <div className="w-1/4 h-full mr-2">
      <img
        src={nike}
        alt="Nike Logo"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/4 h-full z-10 border-radius-10 shadow-md mr-2 transform rotateY(-20deg)">
      <img
        src={fb}
        alt="Facebook Logo"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/4 h-full z-20 grayscale opacity-80 mr-2 transform rotateY(-40deg)">
      <img
        src={acm}
        alt="ACM Logo"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/4 h-full z-30 mr-2 transform rotateY(-360deg)">
      <img
        src={sn}
        alt="Social Network Logo"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>



     
    
      <ContactUs />
     
    </div>
  );
};

export default Home;
