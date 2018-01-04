"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Embed = require('remarkable-embed').Plugin;
var Codepen_1 = require("./Codepen");
exports.Codepen = Codepen_1.default;
var Gist_1 = require("./Gist");
exports.Gist = Gist_1.default;
var GoogleSlides_1 = require("./GoogleSlides");
exports.GoogleSlides = GoogleSlides_1.default;
var SlideShare_1 = require("./SlideShare");
exports.SlideShare = SlideShare_1.default;
var Vimeo_1 = require("./Vimeo");
exports.Vimeo = Vimeo_1.default;
var Youtube_1 = require("./Youtube");
exports.Youtube = Youtube_1.default;
exports.EmbedPlugin = function (md, options) {
    var embed = new Embed();
    embed.register('codepen', Codepen_1.default);
    embed.register('gist', Gist_1.default);
    embed.register('googleslide', GoogleSlides_1.default);
    embed.register('slideshare', SlideShare_1.default);
    embed.register('vimeo', Vimeo_1.default);
    embed.register('youtube', Youtube_1.default);
    md.use(embed.hook);
};
