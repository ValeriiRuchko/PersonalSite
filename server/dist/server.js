"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const fastify_1 = __importDefault(require("fastify"));
// db_client
const drizzleClient_1 = __importDefault(require("./db/drizzleClient"));
// schema files
const blogs_and_images_1 = require("./db/schema/blogs_and_images");
// types and interfaces
// server initialization
const PORT = 3000;
const server = (0, fastify_1.default)({ logger: true });
async function getBlogs() {
    const allBlogs = await drizzleClient_1.default.select().from(blogs_and_images_1.blogs);
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
//# sourceMappingURL=server.js.map