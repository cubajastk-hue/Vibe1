import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH ?? "main",

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",

  // ❗️Pouze pro CLI / build / admin
  token: process.env.TINA_TOKEN ?? "",

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },

  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },

  // ❗️Pouze pro frontend (read)
  client: {
    token: process.env.TINA_PUBLIC_TOKEN ?? "",
  },

  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
        ],
      },
    ],
  },
});
