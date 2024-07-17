import Link from "next/link"

export default function MobileMenu({visible}){

    if(!visible){
        return null
    }

    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4 text-sm">

               <Link href="/pages/home"> <div className="px-3 text-center text-white hover:underline ">
                    Home
                </div> </Link>
               <Link href="/pages/chat"> <div className="px-3 text-center text-white hover:underline ">
                    Chat
                </div> </Link>
                <Link href="/pages/LatestUpdated"> <div className="px-3 text-center text-white hover:underline ">
                    New & Popular
                </div> </Link>
                <Link href="/pages/MyList">  <div className="px-3 text-center text-white hover:underline ">
                    My List
                </div> </Link>

            </div>
        </div>
    )
}