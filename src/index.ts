import { PrismaClient } from "@prisma/client";
import { H } from "@highlight-run/node";

H.init({ projectID: "foo" });

const prisma = new PrismaClient();

await prisma.person.create({
  data: {
    name: "John Doe",
    email: "john.doe@example.com",
  },
});
