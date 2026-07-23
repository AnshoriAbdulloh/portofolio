import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiArduino,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPlatformio,
  SiTailwindcss,
} from "react-icons/si";

export default function Skill() {
  return (
    <section className='bg-gray-50 min-h-screen py-8 flex items-center justify-center w-full'>
      <div
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6  container lg:px-12 px-5 
      *:md:min-h-60 *:xl:min-h-64'
      >
        <div className='bg-[#1e1e1e] text-white p-8 rounded-2xl flex flex-col  md:col-span-2'>
          {/* <div>
            <h2 className='text-3xl font-normal'>
              Our
              <span className='text-[#cda252] italic font-serif'>Features</span>
            </h2>
            <p className='text-3xl font-semibold mt-1'>Special For you</p>
          </div> */}
          <div className={`flex gap-2`}>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <SiPlatformio color='#f77b00' />
            </div>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <SiArduino color='#129094' />
            </div>
          </div>
          <div>
            <h3 className={`mb-2`}>PlatformIO & Arduino</h3>
            <ul
              className={`*:text-sm *:leading-relaxed list-disc list-inside grid grid-cols-4`}
            >
              <li> ESP32</li>
              <li> Real Time Clock</li>
              <li> RFID Reader & Card</li>
              <li> Servo</li>
              <li> DF Player</li>
              <li> DHT11</li>
              <li> Soil Moisture</li>
              <li> Turbidity</li>
              <li> Ultrasonic</li>
              <li> Firebase</li>
            </ul>
          </div>

          {/* <div className='mt-6'>
            <button className='bg-[#f3bd6c] hover:bg-[#dfa753] text-black font-medium py-2.5 px-5 rounded-full text-sm inline-flex items-center gap-2 transition'>
              See All Features
              <span>&rarr;</span>
            </button>
          </div> */}
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col '>
          <div className={`flex gap-2`}>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <FaReact color='#61DAFB' />
            </div>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <SiTailwindcss color='#61DAFB' />
            </div>
          </div>

          <div className={``}>
            <h3 className='font-bold text-gray-900 text-lg mb-2 '>
              React & Tailwind CSS
            </h3>
            <ul
              className={`*:text-sm *:text-gray-500 *:leading-relaxed list-disc list-inside `}
            >
              <li> React Router-Dom</li>
              <li> React Icons</li>
              <li> React Scroll</li>
              <li> Firebase</li>
              <li> Vite</li>
            </ul>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col '>
          <div className={`flex gap-2`}>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <FaNodeJs color='#5FA04E' />
            </div>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <SiExpress color='#000' />
            </div>
          </div>

          <div className={``}>
            <h3 className='font-bold text-gray-900 text-lg mb-2 '>
              Node.js & Express.js
            </h3>
            <ul
              className={`*:text-sm *:text-gray-500 *:leading-relaxed list-disc list-inside `}
            >
              <li> React Router-Dom</li>
              <li> React Icons</li>
              <li> React Scroll</li>
              <li> Firebase</li>
              <li> Vite</li>
            </ul>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col '>
          <div className={`flex gap-2`}>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <SiMongodb color='#47A248' />
            </div>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <SiFirebase color='#FFCA28' />
            </div>
            <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
              <GrMysql color='#005d88' size={25} className={``} />
            </div>
          </div>

          <div className={``}>
            <h3 className='font-bold text-gray-900 text-lg mb-2 '>
              MongoDB & Firebase
            </h3>
            <ul
              className={`*:text-sm *:text-gray-500 *:leading-relaxed list-disc list-inside `}
            >
              <li> Auth Login</li>
              <li> Registration Google</li>
              <li> React Scroll</li>
              <li> Firebase</li>
              <li> Vite</li>
            </ul>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col '>
          <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-4xl mb-4 '>
            <FaGithub color='#000' />
          </div>
          <div className={``}>
            <h3 className='font-bold text-gray-900 text-lg mb-2 '>
              Code Repository
            </h3>
            <ul
              className={`*:text-sm *:text-gray-500 *:leading-relaxed list-disc list-inside `}
            >
              <li> React Router-Dom</li>
              <li> React Icons</li>
              <li> React Scroll</li>
              <li> Firebase</li>
              <li> Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
