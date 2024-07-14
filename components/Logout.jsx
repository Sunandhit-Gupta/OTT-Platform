"use client"
import { signOut } from "next-auth/react"

export default function Logout({userName}){
    return <div>
    <p className="text-white">Logged in as: {userName}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>
      Log Out
    </button>
    </div>
}
