import Img from "../../assets/picture/dataMaintenance.png";

const courses = [
  { nameCourse: "AI Beginner", img: Img },
  { nameCourse: "Dasar-dasar Keamanan AI", img: Img },
  {
    nameCourse: "Menerapkan Rekayasa Prompt dengan Azure OpenAI Service",
    img: Img,
  },
  { nameCourse: "Menskalakan AI di Organisasi", img: Img },
  { nameCourse: "Karir Data Analyst di Era AI", img: Img },
];

export default function Courses() {
  return (
    <section className={`bg-[#1f1f1f] w-full pb-15 flex flex-col items-center`}>
      <span className={`text-white py-5 text-5xl`}>Courses</span>
      <div className={`container lg:px-12 px-5`}>
        <div className={` overflow-hidden rounded-2xl`}>
          {" "}
          <div
            className={`flex sm:justify-start overflow-hidden border gap-5 scroll-smooth no-scrollbar *:shrink-0 rounded-2xl marquee`}
          >
            {[...courses, ...courses].map((course, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-15 max-w-80 flex flex-col items-center`}
                >
                  <img src={course.img} alt='' className={`max-h-50`} />
                  <p className={`pb-3 text-center`}>{course.nameCourse}</p>
                  <button
                    className={`border px-5 py-2 rounded-full mt-auto cursor-pointer`}
                  >
                    View Course
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
