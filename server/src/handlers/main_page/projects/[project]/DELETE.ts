// db_client
import db from "#db_client";

// schema files
import { projects } from "#db_schema/projects";
import { eq } from "drizzle-orm";
import { FastifyRequest, FastifyReply } from "fastify";

async function projectDELETE(request: FastifyRequest, reply: FastifyReply) {
  const urlPARAM = (await request.params) as { name: string };
  try {
    await db.delete(projects).where(eq(projects.name, urlPARAM.name));
    reply.statusCode = 200;
    reply.send({
      msg: `Project ${urlPARAM.name} deleted successfully`,
    });
  } catch (err) {
    console.log(err);
    reply.statusCode = 500;
    reply.send({
      msg: `Project ${urlPARAM.name} already doesn't exist`,
    });
  }
}

export default projectDELETE;
