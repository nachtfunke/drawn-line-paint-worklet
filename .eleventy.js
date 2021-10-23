module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/worklet.js");
  eleventyConfig.addPassthroughCopy("./src/properties.js");
  eleventyConfig.addPassthroughCopy("./src/register.js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
