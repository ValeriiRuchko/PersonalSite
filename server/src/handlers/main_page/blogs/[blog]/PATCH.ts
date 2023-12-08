// db_client
import db from "#db_client";

// schema files
import { blogs } from "#db_schema/blogs_and_images";
import { eq } from "drizzle-orm";
import { FastifyRequest, FastifyReply } from "fastify";

type projectInstance = typeof blogs.$inferInsert;

async function blogUPDATE(request: FastifyRequest, reply: FastifyReply) {
  const editProject = (await request.body) as projectInstance;
  const urlPARAM = (await request.params) as { title: string };
  try {
    await db
      .update(blogs)
      .set({
        title: editProject?.title,
        content: editProject?.content,
        time_to_read: editProject?.time_to_read,
      })
      .where(eq(blogs.title, urlPARAM.title));
    reply.statusCode = 200;
    reply.send({
      msg: `Blog ${urlPARAM.title} changed successfully`,
    });
  } catch (err) {
    console.log(err);
    reply.statusCode = 500;
    reply.send({
      msg: `Blog ${urlPARAM.title} change wasn't completed`,
    });
  }
}

export default blogUPDATE;
