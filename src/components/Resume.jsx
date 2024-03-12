import AboutImg from "../assets/aboutMe.png";

export default function Resume() {
  return (
    <section id="resume" className=" flex flex-col md:flex-row px-5 py-5 bg-white">
      <div classNmae="md:w-1/2 flex ">
        <img src={AboutImg} />
      </div>
      <div className=" md:w-1/2 text-2xl flex justify-center">
        <div className="flex justify-center text-black">
       <div className="resume  mt-8 ">
       <p className="text-2xl">RESUME</p>
       <div className="flex flex-col md:row">
        <div>
        <p>You can see my resume  <a className=" flex flex-col items-center btn mt-8" href="#">Download</a></p>
  
        </div>
      
       </div>
       </div>
       </div>
        </div>
      
   
    
    </section>
  );
}
