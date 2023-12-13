import Fastify from "fastify";
import projectsGET from "./handlers/main_page/projects/GET.js";
import projectsPOST from "./handlers/main_page/projects/POST.js";
import projectDELETE from "./handlers/main_page/projects/[project]/DELETE.js";
import projectUPDATE from "./handlers/main_page/projects/[project]/PATCH.js";
import { POSTprojectsOpts, GETprojectsOpts, DELETEprojectsOpts, PATCHprojectsOpts, } from "./route_schemas/projects_opts.js";
import blogsGET from "./handlers/main_page/blogs/GET.js";
import blogsPOST from "./handlers/main_page/blogs/POST.js";
import blogGET from "./handlers/main_page/blogs/[blog]/GET.js";
import blogsDELETE from "./handlers/main_page/blogs/[blog]/DELETE.js";
import blogUPDATE from "./handlers/main_page/blogs/[blog]/PATCH.js";
import { GETblogsOpts, } from "./route_schemas/blogs_opts.js";
const PORT = 3000;
const server = Fastify({ logger: false });
server.get("/projects", GETprojectsOpts, projectsGET);
server.post("/projects", POSTprojectsOpts, projectsPOST);
server.delete("/projects/:name", DELETEprojectsOpts, projectDELETE);
server.patch("/projects/:name", PATCHprojectsOpts, projectUPDATE);
server.get("/blogs", GETblogsOpts, blogsGET);
server.post("/blogs", blogsPOST);
server.get("/blogs/:title", blogGET);
server.delete("/blogs/:title", blogsDELETE);
server.patch("/blogs/:name", blogUPDATE);
server.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server started on port ${PORT} with address ${address}`);
});
//# sourceMappingURL=server.js.map