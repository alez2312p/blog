import { NextResponse } from "next/server"
import prisma from "../../../utils/connect"

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return new NextResponse(JSON.stringify(users, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
}