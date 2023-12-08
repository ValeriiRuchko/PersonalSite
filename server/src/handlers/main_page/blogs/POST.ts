// db_client
import db from "#db_client";

// schema files
import { blogs } from "#db_schema/blogs_and_images";
import { FastifyRequest, FastifyReply } from "fastify";

// built-in property of Drizzle "$inferInsert" helps to generate type according
// to fields in the table
type blogInstance = typeof blogs.$inferInsert;

async function blogsPOST(request: FastifyRequest, reply: FastifyReply) {
  const newProject = (await request.body) as blogInstance;
  try {
    await db.insert(blogs).values({
      title: newProject.title,
      content: newProject.content,
      time_to_read: newProject.time_to_read,
    });

    reply.statusCode = 200;
    reply.send({
      msg: "New blog created successfully",
    });
  } catch (err) {
    console.log(err);
    reply.statusCode = 500;
    reply.send({
      msg: "Failed to create new blog with specified fields",
    });
  }
}

export default blogsPOST;
