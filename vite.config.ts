import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { jsxRoutes } from "remix-json-routes";
import routes from "./app/routes";

export default defineConfig({
  plugins: [
    remix({
      routes: async (defineRoutes) => {
        return jsxRoutes(defineRoutes, routes);
      },
    }), 
    tsconfigPaths(),
  ],
});
