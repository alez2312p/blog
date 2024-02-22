import { NextResponse } from "next/server"
import prisma from "../../../utils/connect"

export const POST = async (req) => {

    try {
        const body = await req.json();
        const contact = await prisma.contact.create({
            data: { ...body }
        });
        return new NextResponse(JSON.stringify(contact, { status: 200 }));

    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
}