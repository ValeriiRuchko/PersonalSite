import db from "#db_client";
import { projects } from "#db_schema/projects";
import { eq } from "drizzle-orm";
async function projectUPDATE(request, reply) {
    const editProject = (await request.body);
    const urlPARAM = (await request.params);
    try {
        await db
            .update(projects)
            .set({
            name: editProject?.name,
            description: editProject?.description,
            github_link: editProject?.github_link,
        })
            .where(eq(projects.name, urlPARAM.name));
        reply.statusCode = 200;
        reply.send({
            msg: `Project ${urlPARAM.name} changed successfully`,
        });
    }
    catch (err) {
        console.log(err);
        reply.statusCode = 500;
        reply.send({
            msg: `Project ${urlPARAM.name} change wasn't completed`,
        });
    }
}
export default projectUPDATE;
//# sourceMappingURL=PATCH.js.map