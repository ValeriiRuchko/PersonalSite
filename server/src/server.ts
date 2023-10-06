// imports
import Fastify from "fastify";

// db_client
import db from "./db/drizzleClient";

// schema files
import { blogs, images } from "./db/schema/blogs_and_images";

// types and interfaces

// server initialization
const PORT = 3000;

const server = Fastify({ logger: true });

async function getBlogs() {
  const allBlogs = await db.select().from(blogs);
  return allBlogs;
}
// code action: Leader + la
server.get("/", (request, response) => {
  getBlogs().then((value) => {
    response.send(value);
  });
});

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server started on port ${PORT} with address ${address}`);
});
