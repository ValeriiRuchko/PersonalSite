// db_client
import db from "#db_client";

// schema files
import { projects } from "#db_schema/projects";
import { FastifyRequest, FastifyReply } from "fastify";

async function projectsGET(request: FastifyRequest, reply: FastifyReply) {
  const getProjects = await db.select().from(projects);
  reply.header("Access-Control-Allow-Origin", "*");
  reply.send(getProjects);
}

export default projectsGET;
