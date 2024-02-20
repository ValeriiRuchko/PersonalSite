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

const GETblogsOpts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          required: ["title", "content", "time_to_read"],
          properties: {
            title: { type: "string" },
            content: { type: "string" },
            time_to_read: { type: "string" },
            date_of_creation: { type: "string" },
            title_image_path: { type: "string" },
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

const POSTblogsOpts: RouteShorthandOptions = {
  schema: {
    response: commonResponseSchema,
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

const DELETEblogsOpts: RouteShorthandOptions = {
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

const PATCHblogsOpts: RouteShorthandOptions = {
  schema: {
    response: commonResponseSchema,
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        github_link: { type: "string" },
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

export { POSTblogsOpts, GETblogsOpts, DELETEblogsOpts, PATCHblogsOpts };
