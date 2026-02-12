import { createRequire } from "module";
import { PrismaPg } from "@prisma/adapter-pg";

const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({adapter,});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
