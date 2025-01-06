import Container from "@/Components/Container";
import Link from "next/link";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaArrowRight, FaLinkedinIn, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png"
import banner from "../assets/banner.png"
import Image from "next/image";
export default function Home() {
  return (
    <div className="space-y-10">
      {/* heading */}
<div  className="bg-[#0872B9] py-4 text-white font-light">
<Container>
  <div className="flex justify-between items-center">
    {/* location */}

    <div className="flex gap-3">
<p className="flex  items-center  gap-1"> <span><CiLocationOn /></span> House 14, Block# B, Banasree, Dhaka-1219</p>
<span className=" text-white">|</span>

<p className="flex  items-center  gap-2"> <span><CiMail /></span> Info@Microdeft.Com</p>
    </div>
    {/* social */}
    <div className="flex gap-4 items-center">
    <FaSquareFacebook />
    <FaTwitter />
    <FaLinkedinIn />
    </div>
  </div>
</Container>
</div>
{/* navbar */}
<Container>
<div className="flex items-center justify-between">
  <div >
    {/* logo */}
<Image src={logo} height={150} width={150} alt="logo"/>
  </div>
  <div className="flex gap-5">
    {/* navlinks */}
    <Link className="text-[#0872B9] active:text-[#0872B9]" href="/">Home</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]" href="/">About</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]"  href="/">Products</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]"  href="/">Services</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]"  href="/">Projects</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]"  href="/">Blog</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]"  href="/">Career</Link>
    <Link className="hover:text-[#0872B9] active:text-[#0872B9]"  href="/">Contract Us</Link>
  </div>
</div>
</Container>
{/* banner */}
<div className="bg-slate-100 ">
  <Container>
   <div className="flex justify-between  pt-20  items-center">
     {/* left */}
     <div className="w-1/2 space-y-10">
      <h1 className="text-black font-bold text-5xl">Grow Your Business With Custom Web Development Services</h1>
      <p className="text-[#515151] text-xl ">We Help Tech Startup Businesses Grow Through Innovation And Technology. We Are Working Hard To Make Your Business Easier And Better.</p>
      <button className="bg-[#0872B9] rounded-lg flex  items-center gap-2 text-white px-6 py-3">
        Learn More <span><FaArrowRight size={20} /></span>
      </button>
    </div>
    {/* right */}
    <div>
      <Image src={banner} height={1000} width={1000} alt="banner" />
    </div>
   </div>
  </Container>

</div>
    </div>
  );
}
