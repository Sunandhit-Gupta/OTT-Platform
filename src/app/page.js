'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

 const Page = ()=>{
  const router = useRouter();

  const changeRoute = ()=>{
    router.push('/auth');
};

  return (
    <>
    <div className="bg-[url(/images/background2.jpg)] bg-cover h-full">
    <div className="bg-gradient-to-b from-black from-30% via-transparent via-50% to-black to-80% h-full ">
      <div className="bg-black opacity-80 h-full">
      <div className=" h-30 px-5 py-10">
        <Image className="h-20 w-40 " src={"/images/Netflix_Logo.png"} width={100} height={100} alt="Logo"/>
      </div>
      <div className="flex items-center justify-center h-100 flex-col gap-5 lg:gap-2">
        <div className="gap-y-6 flex flex-col justify-center items-center px-2">
        <h1 className="text-white text-5xl font-bold">Unlimited movies, TV shows and more</h1>
        <h2 className="text-white text-2xl">Watch anywhere. Cancel anytime.</h2>
        <h2 className="text-white text-2xl">Ready to watch? Enter Get Started to begin.</h2>
        </div>
      <button  className="bg-red-800 px-2 py-2 text-1xl lg:px-3 lg:py-3 lg:text-3xl font-bold text-white font-mono rounded" onClick={changeRoute} >Get Started</button>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Page;