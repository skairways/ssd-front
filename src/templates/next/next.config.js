/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.alias["@"] = path.join(__dirname, "src", "app")
		return config
	},
	rewrites() {
		return [
			{
				source: "/",
				destination: "/main",
			},
		]
	},
}

module.exports = nextConfig
