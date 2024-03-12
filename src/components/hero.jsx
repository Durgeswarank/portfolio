
import HeroImg from '../assets/develeoper-removebg-preview.png'
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
export default function Hero(){
    return <section id="hero" className= 'flex flex-col md:flex-row  py-32 px-8 bg-secondary justify-center text-5xl'>

       <div className=' md:W-1/2 flex flex-col'>
        <h3 className='text-white font-hero-font'>hi, <br></br>iam Durgesh
        <p className='text-2xl'>Iam a frontend Develeoper</p>
        </h3>
       

       <div className='flex flex-row py-6 px-4'>
       <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter/></a>
       <a href='#' className='pr-5 hover:text-white' ><AiOutlineFacebook/></a>
       <a href='#' className='hover:text-white'><AiOutlineWhatsApp/></a>
       </div>
       </div>
        <img className='md:w-1/3  ' src={HeroImg}/>
    </section>
}
