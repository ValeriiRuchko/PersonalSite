const commonResponseSchema = {
    200: {
        type: "object",
        properties: {
            msg: { type: "string" },
        },
    },
    500: {
        type: "object",
        properties: {
            msg: { type: "string" },
        },
    },
};
const GETprojectsOpts = {
    schema: {
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    required: ["name", "description"],
                    properties: {
                        name: { type: "string" },
                        description: { type: "string" },
                        github_link: { type: "string" },
                        technologies: { type: "string" },
                    },
                },
            },
            500: {
                type: "object",
                properties: {
                    msg: { type: "string" },
                },
            },
        },
    },
};
const POSTprojectsOpts = {
    schema: {
        response: commonResponseSchema,
        body: {
            type: "object",
            required: ["name", "description"],
            properties: {
                name: { type: "string" },
                description: { type: "string" },
                github_link: { type: "string" },
                technologies: { type: "string" },
            },
        },
    },
};
const DELETEprojectsOpts = {
    schema: {
        response: commonResponseSchema,
        params: {
            type: "object",
            properties: {
                name: { type: "string" },
            },
        },
    },
};
const PATCHprojectsOpts = {
    schema: {
        response: commonResponseSchema,
        body: {
            type: "object",
            properties: {
                name: { type: "string" },
                description: { type: "string" },
                github_link: { type: "string" },
                technologies: { type: "string" },
            },
        },
        params: {
            type: "object",
            properties: {
                name: { type: "string" },
            },
        },
    },
};
export { POSTprojectsOpts, GETprojectsOpts, DELETEprojectsOpts, PATCHprojectsOpts, };
//# sourceMappingURL=projects_opts.js.map