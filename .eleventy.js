const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    /*to add files that arent being passed to 11ty
    
    */
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/css');

    /*  Custom filter for limiting amount of posts since 11ty outputs arrays instead of the actual posts */
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    
    

    eleventyConfig.addFilter("postDate", (dateObj) => {

        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)

    })

    return {
        dir: {

            input: "src",
            output: "public"

        }

    };

}