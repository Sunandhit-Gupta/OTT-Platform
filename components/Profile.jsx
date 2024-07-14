"use client"
import { useSession } from "@/src/app/contexts/SessionContext"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default  function ProfilePage(){

    const session =  useSession();
    const userName = session.user.name;
    const router =  useRouter();

    const navigateHome = ()=>{
        if(router){
            router.push("/pages/home");
        }
        else
        {
            throw new Error("Router not Found");
        }

    }

    return (
        <div className="flex items-center h-full justify-center">
        <div className="flex flex-col">
            <h1 className="text-3xl md:text-6xl text-white text-center"> Who is watching?</h1>
            <div className="flex items-center justify-center gap-8 mt-10">
                <div onClick={navigateHome}>
                    <div className="group flex-col w-44 mx-auto flex items-center justify-center">
                        <div className="w-20 h-20 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                            <Image src={"/images/avatar.png"} alt="avatar" width={180} height={100}/>
                        </div>
                        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                            {userName}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}