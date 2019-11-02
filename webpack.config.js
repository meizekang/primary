const primary_entry = __dirname + "/index.js";

const primary_output = {
	path:__dirname + "/build",
	filename:"primary.js",
	libraryTarget: "global",
	library: ""
}

const primary_config = {
	entry: primary_entry,
	output: primary_output
}

module.exports = primary_config;