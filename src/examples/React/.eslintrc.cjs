module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		"prettier"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "react", "react-hooks", "prettier", "import"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/react-in-jsx-scope": "off",
		"react/display-name": "off",
	},
}
