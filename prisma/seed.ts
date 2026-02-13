import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const leadData: Prisma.LeadCreateInput[] = [
  {
    name: "Janier Ocampo",
    email: "janier@prisma.io",
  },
  {
    name: "Oscar Guerrero",
    email: "oscar@prisma.io",
  },
];

export async function main() {
  console.log("Starting to seed...");
  await prisma.lead.createMany({
    data: leadData,
    skipDuplicates: true
  });
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
