import "dotenv/config";
//import { createRequire } from "module";
//import { PrismaPg } from "@prisma/adapter-pg";

//const require = createRequire(import.meta.url);
import { PrismaClient } from "../../prisma/generated/client";

//const connectionString = process.env.PRISMA_DATABASE_URL;

//if (!connectionString) {
  //throw new Error("PRISMA_DATABASE_URL is not set");
//}

//const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient(); //{adapter,}

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
