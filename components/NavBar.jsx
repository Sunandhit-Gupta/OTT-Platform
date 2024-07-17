"use client"
import Image from "next/image"
import NavBarItem from "./NavBarItem"
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs'
import MobileMenu from "@/components/MobileMenu"
import { useCallback, useEffect, useState } from "react"
import AccountMenu from "./AccountMenu"
import fetchSearchedMovie from "@/lib/fetchSearchedMovie"
import MovieSearchList from "./MovieSearchList"
import Link from "next/link";


const top_offset = 66;


export default function NavBar(){

    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showAccountMenu,setShowAccountMenu] = useState(false);
    const [showBackground,setShowBackground] = useState(false);
    const [showSearchInput,setShowSearchInput] = useState(false);
    const [inputSearchValue,setInputSearchValue] = useState("");
    const [moviesReturned,setMovieReturned] = useState([]);

    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu((current)=>!current);
    },[]);

    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current);
    },[]);

    const toggleSearchInput = useCallback(()=>{
        setShowSearchInput((current)=>!current);
    },[]);




    const handleSearchInput = async(event)=>{
        setInputSearchValue(event.target.value);
    }

    useEffect(()=>{
        const fetchMovies = async () => {
            if (inputSearchValue.trim() !== "") {
                const returned = await fetchSearchedMovie(inputSearchValue);
                setMovieReturned(returned);
            } else {
                setMovieReturned([]);
            }
        }

        fetchMovies();
    },[inputSearchValue])


    useEffect(()=>{

        const handler = ()=>{
            if(window.scrollY >= top_offset){
                setShowBackground(true);
            }
            else
            {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll',handler);
        return ()=>{
            window.removeEventListener('scroll',handler);
        }
    },[]);


    return (
        <nav className="w-full fixed z-40 top-0 h-100">
            <div className= {`px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            ${
                showBackground?"bg-zinc-900 bg-opacity-90":""
            }
            `}>

                <Image className="h-9 lg:h-9" src={"/images/Netflix_Logo.png"} width={100} height={200} alt="Logo"/>

                <div className=" flex-row ml-8 gap-7 hidden lg:flex">
                   <Link href= "/pages/home"> <NavBarItem label={"Home"}/> </Link>
                   <Link href="/pages/chat"> <NavBarItem label={"Chat"}/> </Link>
                   <Link href="/pages/LatestUpdated"> <NavBarItem label={"New & Popular"}/> </Link>
                   <Link href="/pages/MyList"> <NavBarItem label={"My List"}/> </Link>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown  className={`text-white transition ${showMobileMenu?"rotate-180":"rotate-0"}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-4 lg:gap-7 items-center">

                <div className="ml-2 flex flex-col w-[12vw] rounded-b-md bg-[#18181B] rounded-md">
                    {showSearchInput? <input className="px-2 bg-[#18181B] text-white rounded-md" type="text" placeholder="Movie Title" value={inputSearchValue}  onChange={handleSearchInput}  /> : null}

                   { showSearchInput && inputSearchValue ? <MovieSearchList data = {moviesReturned}/>:null}
                </div>

                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition" onClick={toggleSearchInput}>
                        <BsSearch/>
                    </div>
                    {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell/>
                    </div> */}
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-md overflow-hidden ">
                            <Image src={"/images/avatar.png"} width={100} height={100} alt="avatar"/>
                        </div>
                        <BsChevronDown  className= {`text-white transition ${showAccountMenu? 'rotate-180':'rotate-0'}`}/>
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}