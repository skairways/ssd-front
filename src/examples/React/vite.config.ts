import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr(), checker({ typescript: true })],
	resolve: {
		alias: {
			"@styles": path.resolve(__dirname, "src/shared/styles"),
		},
	},
})
