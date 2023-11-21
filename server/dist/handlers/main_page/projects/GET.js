import db from "#db_client";
import { projects } from "#db_schema/projects";
async function projectsGET(request, reply) {
    const getProjects = await db.select().from(projects);
    reply.send(getProjects);
}
export default projectsGET;
//# sourceMappingURL=GET.js.map