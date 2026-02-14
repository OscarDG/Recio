import type { APIRoute } from "astro";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client"

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { name, email } = await request.json();

  if (!name || !email) {
    return new Response(
      JSON.stringify({ error: "Name and email are required" }),
      { status: 400 }
    );
  }

  try {
    const lead = await prisma.lead.create({
      data: { name, email },
    });

    return new Response(JSON.stringify(lead), { status: 201 });
  } catch (error) {
    if(
      error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002"
    ){
      return new Response(
        JSON.stringify({ error: "Este email ya está registrado" }),
        { status: 409 } // 409 = Conflict
      );
    }

    console.error(error);
    return new Response(
      JSON.stringify({ error: "DB error" }),
      { status: 500 }
    );
  }
};

console.log("PRISMA_DATABASE_URL:", process.env.PRISMA_DATABASE_URL);