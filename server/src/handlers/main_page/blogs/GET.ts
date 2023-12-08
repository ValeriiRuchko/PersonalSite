// db_client
import db from "#db_client";

// schema files
import { blogs } from "#db_schema/blogs_and_images";
import { FastifyRequest, FastifyReply } from "fastify";

async function blogsGET(request: FastifyRequest, reply: FastifyReply) {
  const allBlogs = await db.select().from(blogs);
  reply.header("Access-Control-Allow-Origin", "*");
  reply.send(allBlogs);
}

export default blogsGET;
