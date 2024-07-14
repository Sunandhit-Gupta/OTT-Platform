import serverAuth from '@/lib/serverAuth';

export default async function handler(req,res){

    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try{
        const { currentUser } = await serverAuth(req);
        return req.status(200).json(currentUser);
    }catch(error){
        console.lof(error);
        return res.status(400).end();
    }
}

export const GET = handler(req,res);
