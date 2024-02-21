import { NextResponse } from "next/server"
import prisma from "../../../../utils/connect"

export const GET = async (req) => {

    try {
        const mostPopular = await prisma.category.findMany({
            take: 4,
            orderBy: {
                posts: {
                    _count: 'desc',
                },
            },
        });
        if (!mostPopular) {
            return new NextResponse(JSON.stringify({ message: "No categories found" }, null, 2), { status: 404 });
        }
        return new NextResponse(JSON.stringify(mostPopular, null, 2), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, null, 2), { status: 500 }
        );
    }
};
