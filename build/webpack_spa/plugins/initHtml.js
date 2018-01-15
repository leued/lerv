const $c = require('../config.js');

function initHtml(options) {
	this.options = options;
}

initHtml.prototype.apply = function(compiler) {
	var path = this.options.path;
	compiler.plugin('compilation', function(compilation, options) {
		compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
			$c.fs.readFile(path, 'utf-8', function(err, data) {
				if (err) {
					console.log(err)
				} else {
					htmlPluginData.html = data.replace(/\<\/head\>/, '</head>' + htmlPluginData.html);
					callback(null, htmlPluginData);
				}
			})
		});
	});
};

module.exports = initHtml;