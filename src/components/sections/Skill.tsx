export default function Skill() {
  return (
    <div className='bg-gray-50 min-h-screen p-8 flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full'>
        <div className='bg-[#1e1e1e] text-white p-8 rounded-2xl flex flex-col justify-between min-h-[200px] md:col-span-2'>
          <div>
            <h2 className='text-3xl font-normal'>
              Our{" "}
              <span className='text-[#cda252] italic font-serif'>Features</span>
            </h2>
            <p className='text-3xl font-semibold mt-1'>Special For you</p>
          </div>
          <div className='mt-6'>
            <button className='bg-[#f3bd6c] hover:bg-[#dfa753] text-black font-medium py-2.5 px-5 rounded-full text-sm inline-flex items-center gap-2 transition'>
              See All Features
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-2xl mb-4'>
            📜{" "}
          </div>
          <div>
            <h3 className='font-bold text-gray-900 text-lg mb-2'>
              Get Certificate
            </h3>
            <p className='text-sm text-gray-500 leading-relaxed'>
              Add Value To Your Certificates And Increase Your Chances Of
              Getting Hired In Your Dream Job.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-2xl mb-4'>
            👨‍🏫
          </div>
          <div>
            <h3 className='font-bold text-gray-900 text-lg mb-2'>
              Amazing Instructor
            </h3>
            <p className='text-sm text-gray-500 leading-relaxed'>
              Our Amazing Instructors Bring Experience, Knowledge And Fun On The
              Table.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-2xl mb-4'>
            🎧
          </div>
          <div>
            <h3 className='font-bold text-gray-900 text-lg mb-2'>
              Life Time Support
            </h3>
            <p className='text-sm text-gray-500 leading-relaxed'>
              You Will Have Life Times Access Of The Courses & Resources. Also
              Contacting Instructors Any Time!
            </p>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div className='w-12 h-12 bg-[#fef8eb] rounded-full flex items-center justify-center text-2xl mb-4'>
            💻
          </div>
          <div>
            <h3 className='font-bold text-gray-900 text-lg mb-2'>
              Video Lesson
            </h3>
            <p className='text-sm text-gray-500 leading-relaxed'>
              Recorded Version Of Lectures From Professional Instructions To
              Boost Your Growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
