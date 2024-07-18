
import Image from "next/image"

export default function Loading(){

    return <>
    <div className="text-center flex items-center justify-center h-full w-full">
        <h1><Image unoptimized className="bg-transparent"  src={"/images/Loading_icon.gif"} width={100} height={100} alt="Loading..."/></h1>
    </div>
    </>
}