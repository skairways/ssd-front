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
}

module.exports = nextConfig
