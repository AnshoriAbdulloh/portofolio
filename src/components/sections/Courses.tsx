import Img from "../../assets/picture/dataMaintenance.png";

export default function Courses() {
  return (
    <section className={`bg-[#1f1f1f] w-full pb-15 flex flex-col items-center`}>
      <span className={`text-white py-5 text-5xl`}>Courses</span>
      <div className={`container lg:px-12 px-5 flex justify-center`}>
        <div
          className={`flex sm:justify-center overflow-x-auto gap-5 snap-x snap-mandatory scroll-smooth no-scrollbar *:snap-center *:shrink-0 rounded-2xl w-fit`}
        >
          <div className={`bg-white rounded-2xl p-15`}>
            <img src={Img} alt='' className={`max-h-50`} />
            <p>HTML Web.dev Course</p>
            <button className={`border px-5 py-2 rounded-full`}>
              View Course
            </button>
          </div>
          <div className={`bg-white rounded-2xl p-15 `}>
            <img src={Img} alt='' className={`max-h-50`} />
            <p>HTML Web.dev Course</p>
            <button className={`border px-5 py-2 rounded-full`}>
              View Course2
            </button>
          </div>
          <div className={`bg-white rounded-2xl p-15`}>
            <img src={Img} alt='' className={`max-h-50`} />
            <p>HTML Web.dev Course</p>
            <button className={`border px-5 py-2 rounded-full`}>
              View Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
