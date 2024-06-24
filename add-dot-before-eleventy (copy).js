// module.exports = (eleventyConfig) => {
// 	// Set directories to pass through to the dist folder

// 	eleventyConfig.addWatchTarget("./src/sass/");
// 	eleventyConfig.addPassthroughCopy("./src/css");
// 	return {
// 		dir: {
// 			input: "src",
// 			output: "dist",
// 		},
// 	};
// };

//purge css import


const purgeCssPlugin = require("eleventy-plugin-purgecss");


// postcss import 
const PostCSSPlugin = require("eleventy-plugin-postcss");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/images/");

	eleventyConfig.addWatchTarget("./src/sass/");

	eleventyConfig.addPassthroughCopy("./src/css/");

	eleventyConfig.addPassthroughCopy("./src/js/");

	eleventyConfig.setDynamicPermalinks(false);


	//postCss 
	eleventyConfig.addPlugin(PostCSSPlugin);

	


// add alias intead of the full url
	eleventyConfig.addLayoutAlias("base", "layouts/base.html");


	// purge css  11ty config for build only

	eleventyConfig.addPlugin(purgeCssPlugin, {
		// Optional: Specify the location of your PurgeCSS config
		config: "./purgecss.config.js",
	
		// Optional: Set quiet: true to suppress terminal output
		quiet: false,
	  });

			//TODO for big project use this condition 
	  // production === built command ' npm buitd ' for our project
			// if (process.env.NODE_ENV === "production") {
			// 	eleventyConfig.addPlugin(purgeCssPlugin);
			// }


	return {
		

		templateFormats: ["html", "njk"],
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output:"dist",
		},
	};
};




// import from eleventy 
// eleventyConfig.addPassthroughCopy({
// 	"node_modules/chartist/dist/chartist.min.css": "assets/chartist.min.css",
// 	"node_modules/chartist/dist/chartist.min.js": "assets/chartist.min.js"
// });