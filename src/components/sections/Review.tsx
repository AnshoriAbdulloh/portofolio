export default function Review() {
  return (
    <section className={`w-full flex justify-center bg-white`}>
      <div
        className={`container w-full lg:px-12 px-5 grid md:grid-cols-4 grid-cols-2 *:flex *:flex-col *:items-center *:text-4xl [&_div_p]:text-[14px] [&_div_p]:text-gray-500 [&_div_p]:text-nowrap *:py-8 md:*:py-15 xl:*:py-20`}
      >
        <div className={` `}>
          4.5<p>80K Review</p>
        </div>
        <div className={``}>
          30M<p>Endrollments</p>
        </div>
        <div className={``}>
          2M+<p>Learners</p>
        </div>
        <div className={``}>
          1K+<p>Popular Courses</p>
        </div>
      </div>
    </section>
  );
}
