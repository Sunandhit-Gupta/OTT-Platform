"use client"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
const Footer = ()=>{
    return(<>
<footer className="mt-[50px]">
<div className="flex flex-row justify-center gap-3  ">
<div className="text-[#0A66C2] color-white">
    <Link href ="https://www.linkedin.com/in/sunandhit-gupta-412933217/" > <FaLinkedin  size={30} /></Link>

</div>
<div className="text-white">
<Link href ="https://github.com/Sunandhit-Gupta" > <FaGithub size={30} /> </Link>

</div>

<div className="text-[#1ED760]">
<Link href ="https://open.spotify.com/playlist/1wDoDs0cIEmYpxefOJ0efG?si=92ce583b1d88439b" > <FaSpotify size={30} /></Link>

</div>
</div>
<div className="text-red-200 text-center p-3">Made with 💕 by Sunandhit Gupta</div>
<div className='text-white bg-neutral-800 text-center'>Copyright © 2023 - 2024 TermsFeed®. All rights reserved.</div>
</footer>
    </>)
}

export default Footer