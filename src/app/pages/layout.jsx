import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { SessionProvider } from "@/src/app/contexts/SessionContext";

export default async function ProtectedLayout({ children }) {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth");
  }

  return (
  < SessionProvider session={session}>
  { children }
  </SessionProvider>
)
}
