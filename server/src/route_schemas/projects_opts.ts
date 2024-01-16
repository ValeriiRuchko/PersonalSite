import { RouteShorthandOptions } from "fastify";

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

const GETprojectsOpts: RouteShorthandOptions = {
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

const POSTprojectsOpts: RouteShorthandOptions = {
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

const DELETEprojectsOpts: RouteShorthandOptions = {
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

const PATCHprojectsOpts: RouteShorthandOptions = {
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

export {
  POSTprojectsOpts,
  GETprojectsOpts,
  DELETEprojectsOpts,
  PATCHprojectsOpts,
};
