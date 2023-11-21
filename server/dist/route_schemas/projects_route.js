const POSTopts = {
    schema: {
        response: {
            200: {
                type: "object",
                properties: {
                    msg: { type: "string" },
                    error: { type: "string" },
                },
            },
        },
        body: {
            type: "object",
            required: ["name", "description"],
            properties: {
                name: { type: "string" },
                description: { type: "string" },
                github_link: { type: "string" },
            },
        },
    },
};
export default POSTopts;
//# sourceMappingURL=projects_route.js.map