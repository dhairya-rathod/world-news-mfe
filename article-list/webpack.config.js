const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
	output: {
		publicPath: "http://localhost:3001/",
	},

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
	},

	devServer: {
		port: 3001,
		historyApiFallback: true,
		open: false,
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: "javascript/auto",
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "article_list",
			filename: "remoteEntry.js",
			remotes: {
				container: "container@http://localhost:3000/remoteEntry.js",
				article_list: "article_list@http://localhost:3001/remoteEntry.js",
				article_detail: "article_detail@http://localhost:3002/remoteEntry.js",
			},
			exposes: {
				"./ArticleCard": "./src/components/ArticleCard.jsx",
				"./ArticleList": "./src/components/ArticleList.jsx",
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
				},
			},
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
};
