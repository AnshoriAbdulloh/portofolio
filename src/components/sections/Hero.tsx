import HeroImage from "../../assets/picture/dataMaintenance.png";

export default function Hero() {
  return (
    <section
      id='about'
      className='relative w-full py-10 overflow-hidden bg-(--primary) flex justify-center'
    >
      <div className='grid lg:grid-cols-12 gap-12 container lg:px-12 px-5 lg:gap-8 items-center'>
        {/* <!-- Left Info Column --> */}
        <div className='lg:col-span-6 space-y-6 md:space-y-8 z-10'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-brandDark leading-[1.1] tracking-tight'>
            Navigating the digital landscape for success
          </h1>

          {/* <!-- Graphic for Mobile (Displays above description only on small screens) --> */}
          <div className='lg:hidden w-full max-w-sm mx-auto my-8 relative float-element'>
            {/* <!-- Dynamic Hero Illustration embedded for absolute visual fidelity --> */}
            <img src={HeroImage} alt='hero' />{" "}
          </div>

          <p className='text-[16px] md:text-xl leading-relaxed max-w-xl'>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className='flex flex-row items-stretch sm:items-center gap-4 pt-2'>
            <button
              //   onClick="openConsultationModal()"
              className='px-5 py-3 border-2 rounded-full text-md'
            >
              Book a consultation
            </button>
            {/* <a
              href='#services'
              className='px-8 py-5 text-center font-bold border-2 border-transparent hover:border-brandDark rounded-2xl transition-all hover:shadow-neo'
            >
              Explore our work
              <i className='fa-solid fa-arrow-right ml-2 text-brandLime'></i>
            </a> */}
          </div>
        </div>

        {/* <!-- Right Graphic Column (Desktop) --> */}
        <div className='hidden lg:block lg:col-span-6 relative float-element'>
          {/* <!-- Dynamic Hero Illustration embedded for absolute visual fidelity --> */}
          <img src={HeroImage} alt='hero' className={`p-10 `} />
        </div>
      </div>
    </section>
  );
}
