// db_client
import db from "#db_client";

// schema files
import { projects } from "#db_schema/projects";
import { eq } from "drizzle-orm";
import { FastifyRequest, FastifyReply } from "fastify";

type projectInstance = typeof projects.$inferInsert;

async function projectUPDATE(request: FastifyRequest, reply: FastifyReply) {
  const editProject = (await request.body) as projectInstance;
  const urlPARAM = (await request.params) as { name: string };
  try {
    await db
      .update(projects)
      .set({
        name: editProject?.name,
        description: editProject?.description,
        github_link: editProject?.github_link,
      })
      .where(eq(projects.name, urlPARAM.name));
    reply.statusCode = 200;
    reply.send({
      msg: `Project ${urlPARAM.name} changed successfully`,
    });
  } catch (err) {
    console.log(err);
    reply.statusCode = 500;
    reply.send({
      msg: `Project ${urlPARAM.name} change wasn't completed`,
    });
  }
}

export default projectUPDATE;
