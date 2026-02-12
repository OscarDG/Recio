import type { APIRoute } from "astro";
import prisma from "@/lib/prisma";

export const POST: APIRoute = async ({request}) => {
    const body = await request.json();
    const { name, email } = body;

    if(!name || !email){
        return new Response(
            JSON.stringify({ error: "Name and email are required" }),
            { status: 400}
        );
    }

    try{
        const lead = await prisma.lead.create({
            data:{
                name,
                email,
            },
        });

        return new Response(JSON.stringify(lead), { status: 201 });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Email already exists or DB error" }),
            { status: 500 }
        );
    }
};