const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.module\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { modules: true },
					},
				],
			},
			{
				test: /\.css$/i,
				exclude: /\.module\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
