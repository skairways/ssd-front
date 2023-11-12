/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "src")],
	},
	webpack: (config) => {
		config.resolve.alias["@"] = path.join(__dirname, "src", "app")
		return config
	},
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/main",
			},
		]
	},
	pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
}

module.exports = nextConfig
