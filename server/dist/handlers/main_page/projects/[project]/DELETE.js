import db from "#db_client";
import { projects } from "#db_schema/projects";
import { eq } from "drizzle-orm";
async function projectDELETE(request, reply) {
    const urlPARAM = (await request.params);
    try {
        await db.delete(projects).where(eq(projects.name, urlPARAM.name));
        reply.statusCode = 200;
        reply.send({
            msg: `Project ${urlPARAM.name} deleted successfully`,
        });
    }
    catch (err) {
        console.log(err);
        reply.statusCode = 500;
        reply.send({
            msg: `Project ${urlPARAM.name} already doesn't exist`,
        });
    }
}
export default projectDELETE;
//# sourceMappingURL=DELETE.js.map