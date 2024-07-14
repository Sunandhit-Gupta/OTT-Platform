import { PrismaClient } from "@prisma/client";

if(!global.prismadb){

    global.prismadb = new PrismaClient();
}

export default global.prismadb;