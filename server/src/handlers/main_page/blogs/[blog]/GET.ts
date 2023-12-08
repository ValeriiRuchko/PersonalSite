// db_client
import db from "#db_client";

// schema files
import { blogs } from "#db_schema/blogs_and_images";
import { eq } from "drizzle-orm";
import { FastifyRequest, FastifyReply } from "fastify";

async function blogGET(request: FastifyRequest, reply: FastifyReply) {
  const urlPARAM = (await request.params) as { title: string };
  try {
    const blog = await db
      .select()
      .from(blogs)
      .where(eq(blogs.title, urlPARAM.title));
    reply.statusCode = 200;
    reply.send(blog);
  } catch (err) {
    console.log(err);
    reply.statusCode = 500;
    reply.send({
      msg: `Blog ${urlPARAM.title} doesn't exist`,
    });
  }
}

export default blogGET;
