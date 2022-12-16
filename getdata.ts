import type {NextApiResponse, NextApiRequest} from 'next';
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const post = await prisma.user.findMany()
    res.status(200).json(post)
}