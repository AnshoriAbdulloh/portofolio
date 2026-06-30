import HeroImage from "../../assets/picture/dataMaintenance.png";

export default function Education() {
  return (
    <section className={`bg-secondary w-full flex justify-center`}>
      <div
        className={`container lg:px-12 px-5 py-15 flex flex-col md:flex-row items-center justify-center gap-x-5 `}
      >
        <img src={HeroImage} alt='' className={` p-5 md:p-0 max-h-80 `} />
        <p className={`max-w-150 text-xl`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit
          iure, illum hic fugiat necessitatibus non voluptates ratione beatae
          nobis, enim similique tenetur. Maiores molestias, omnis sed nam
          quaerat voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia in nostrum reiciendis, non impedit ad earum modi,
          molestiae atque consequatur laboriosam! Quod veritatis magni numquam,
          at aliquid perferendis saepe repellat?
        </p>
      </div>
    </section>
  );
}
