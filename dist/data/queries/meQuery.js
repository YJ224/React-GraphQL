"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.meQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query User {\n    me {\n      id\n      karma\n    }\n  }\n"], ["\n  query User {\n    me {\n      id\n      karma\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=meQuery.js.map