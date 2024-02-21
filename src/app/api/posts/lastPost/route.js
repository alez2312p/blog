import { NextResponse } from "next/server"
import prisma from "../../../../utils/connect"

export const GET = async (req) => {

    try {
        const lastPost = await prisma.post.findMany({
            take: 1,
            orderBy: {
                createdAt: 'desc',
            },
        });
        if (!lastPost) {
            return new NextResponse(JSON.stringify({ message: "No posts found" }, null, 2), { status: 404 });
        }
        return new NextResponse(JSON.stringify(lastPost, null, 2), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, null, 2), { status: 500 }
        );
    }
};
