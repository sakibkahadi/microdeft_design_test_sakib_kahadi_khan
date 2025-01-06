import Container from "@/Components/Container";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
export default function Home() {
  return (
    <div>
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
    </div>
  );
}
