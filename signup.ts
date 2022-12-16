import type {NextApiResponse, NextApiRequest} from 'next';
import prisma from '../../../lib/prisma'
type Data = {
    name: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "POST"){
        const {username, email, password} = req.body
        const post = await prisma.user.create({
            data: {
                email,
                username,
                password,
            
            }
        })

        res.status(200).json(post)
    }
}