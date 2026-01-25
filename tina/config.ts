import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content",
        format: "json",
        match: {
          include: "homepage",
        },
        fields: [
          {
            name: "title",
            label: "Nadpis",
            type: "string",
          },
          {
            name: "subtitle",
            label: "Podnadpis",
            type: "string",
          },
        ],
      },
    ],
  },
});
