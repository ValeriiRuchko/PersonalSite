import Fastify from "fastify";
import blogsGET from "./handlers/main_page/blogs/GET.js";
const PORT = 3000;
const server = Fastify({ logger: true });
server.get("/", blogsGET);
server.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server started on port ${PORT} with address ${address}`);
});
//# sourceMappingURL=server.js.map