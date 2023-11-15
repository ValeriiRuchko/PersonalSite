// imports
import Fastify from "fastify";
// handler functions for routes
import blogsGET from "./handlers/main_page/blogs/GET.js";

// types and interfaces

// server initialization
const PORT = 3000;
const server = Fastify({ logger: true });

// code action: Leader + la
server.get("/", blogsGET);

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server started on port ${PORT} with address ${address}`);
});
