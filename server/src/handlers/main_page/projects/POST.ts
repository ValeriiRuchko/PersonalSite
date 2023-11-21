// db_client
import db from "#db_client";

// schema files
import { projects } from "#db_schema/projects";
import { FastifyRequest, FastifyReply } from "fastify";

// built-in property of Drizzle "$inferInsert" helps to generate type according
// to fields in the table
type projectInstance = typeof projects.$inferInsert;

async function projectsPOST(request: FastifyRequest, reply: FastifyReply) {
  const newProject = (await request.body) as projectInstance;
  try {
    await db.insert(projects).values({
      name: newProject.name,
      description: newProject.description,
      github_link: newProject.github_link,
    });

    reply.statusCode = 200;
    reply.send({
      msg: "New project created successfully",
    });
  } catch (err) {
    console.log(err);
    reply.statusCode = 500;
    reply.send({
      msg: "Failed to create new project with specified fields",
    });
  }
}

export default projectsPOST;
