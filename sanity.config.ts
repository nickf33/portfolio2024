import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./cms/schemas";

const config = defineConfig({
  projectId: "p7zo2iva",
  dataset: "production",
  title: "NF Portfolio",
  apiVersion: "2023-12-06",
  basePath: "/admin",
  plugins: [deskTool()],
  useCdn: true,
  schema: { types: schemas },
});

export default config;
