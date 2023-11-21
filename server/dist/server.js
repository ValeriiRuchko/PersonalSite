import Fastify from "fastify";
import projectsGET from "./handlers/main_page/projects/GET.js";
import projectsPOST from "./handlers/main_page/projects/POST.js";
import { POSTopts, GETopts, DELETEopts, PATCHopts, } from "./route_schemas/projects_opts.js";
import projectDELETE from "./handlers/main_page/projects/[project]/DELETE.js";
import projectUPDATE from "./handlers/main_page/projects/[project]/PATCH.js";
const PORT = 3000;
const server = Fastify({ logger: false });
server.get("/", GETopts, projectsGET);
server.post("/", POSTopts, projectsPOST);
server.delete("/projects/:name", DELETEopts, projectDELETE);
server.patch("/projects/:name", PATCHopts, projectUPDATE);
server.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server started on port ${PORT} with address ${address}`);
});
//# sourceMappingURL=server.js.map