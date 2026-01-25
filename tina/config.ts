import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// ⚠️ Explicitně zde zadej ID a token z Tina Cloud
const clientId = "19865abe-76ca-4967-8391-298b8dc07a70"; // Tvůj Tina Client ID
const token = "16eecb20787b5a20cb2505a604abd01dfd6ea568";   // Tvůj Tina Token

export default defineConfig({
  branch,
  clientId, // použij explicitně
  token,    // použij explicitně
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
        match: { include: "homepage" },
        fields: [
          { name: "title", label: "Nadpis", type: "string" },
          { name: "subtitle", label: "Podnadpis", type: "string" },
        ],
      },
    ],
  },
});
