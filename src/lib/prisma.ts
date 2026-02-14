import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg"
import PrismaPkg from "@prisma/client"

const { PrismaClient } = PrismaPkg

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.PRISMA_DATABASE_URL,
})

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
