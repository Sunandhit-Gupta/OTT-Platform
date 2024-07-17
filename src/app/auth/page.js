import AuthForm from "@/components/AuthForm";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function auth(){

  const session = await getServerSession(options);

  if(session){
     redirect("/pages/profile");
  }
  
  return <AuthForm/>

}