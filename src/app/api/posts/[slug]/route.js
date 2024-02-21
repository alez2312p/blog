import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

export const GET = async (req, { params }) => {
    const { slug } = params;

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true },
        });

        if (post) {
            await prisma.post.update({
                where: { slug },
                data: {
                    view: {
                        increment: 1,
                    },
                },
            });
            const updatedPost = await prisma.post.findUnique({
                where: { slug },
                include: { user: true },
            });

            return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
        } else {
            return new NextResponse(JSON.stringify({ message: "Post not found!" }), { status: 404 });
        }
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
};
