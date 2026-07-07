export default function AboutMe() {
  return (
    <section className={`flex justify-center w-full bg-white `}>
      <div className={`lg:container w-full lg:px-12`}>
        <div className={`bg-[#1f1f1f] text-white rounded-t-4xl pt-5 pb-4 px-5`}>
          <div
            className={`p-5 h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 
              [&_ul_li:first-child]:font-bold  [&_ul_li:first-child]:text-xl`}
          >
            <ul>
              <li>Hubungi saya</li>
              <li>anshoriabdullah2003@gmail.com</li>
              <li>0852 3670 6584</li>
            </ul>
            <ul>
              <li>Ikuti saya</li>
              <li>anshoriabdullah2003@gmail.com</li>
              <li>0852 3670 6584</li>
            </ul>
            <ul>
              <li>Alamat saya</li>
              <li>anshoriabdullah2003@gmail.com</li>
              <li>0852 3670 6584</li>
            </ul>
          </div>
          <hr className={`w-full text-white my-3`} />
          <div className={`text-center text-xs`}>
            @Created by Anshori Abdulloh
          </div>
        </div>
      </div>
    </section>
  );
}
