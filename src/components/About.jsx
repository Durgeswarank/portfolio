import AboutImg from "../assets/aboutMe.png";

export default function About() {
  return (
    <section id="about" className=" flex flex-col md:flex-row px-5 py-5 bg-white">
      <div classNmae="md:w-1/2 flex ">
        <img src={AboutImg} />
      </div>
      <div className=" md:w-1/2 text-2xl      flex justify-center">
        <div className="flex flex-col justify-center text-black">
        <p className="text-bold text-4xl border-b-4 w-[170px] mt-7 mb-4">About Me</p>
       <p className="mb-3"> Hi my name is Durgesh. Iam a front end developer i build beautiful, responsive Applications.</p>
       <p className="mb-3">I build Wwb sites and web appliations by Angular and React.js FrameWorks</p>
       <p> I am proficient in FrontEnd Skills like, tailwind Css, material UI, tw elements,Html5 css3, javascript etc.</p>
        </div>
       
      </div>
    </section>
  );
}

