import db from "#db_client";
import { projects } from "#db_schema/projects";
async function projectsPOST(request, reply) {
    const newProject = (await request.body);
    try {
        await db.insert(projects).values({
            name: newProject.name,
            description: newProject.description,
            github_link: newProject.github_link,
        });
        reply.statusCode = 200;
        reply.send({
            msg: "New project created successfully",
        });
    }
    catch (err) {
        console.log(err);
        reply.statusCode = 500;
        reply.send({
            msg: "Failed to create new project with specified fields",
        });
    }
}
export default projectsPOST;
//# sourceMappingURL=POST.js.map