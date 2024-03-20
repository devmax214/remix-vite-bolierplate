import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      routes: async (defineRoutes) => {
        return defineRoutes((route) => {
          route("/", "index.tsx", () => {
            route("demo", "demo/index.tsx", () => {
              route("counter", "demo/counter.tsx");
            });
          });
        });
      },
    }), 
    tsconfigPaths(),
  ],
});
