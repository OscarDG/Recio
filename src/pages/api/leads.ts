import type { APIRoute } from "astro";
import { prisma } from "../../lib/prisma";

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
    console.error(error);
    return new Response(
      JSON.stringify({ error: "DB error" }),
      { status: 500 }
    );
  }
};
