"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var bookmarklet_1 = require("../bookmarklet");
describe('Bookmarklet Page', function () {
    it('is defined', function () {
        var app = enzyme_1.shallow(React.createElement(bookmarklet_1.default, { serverState: {} }));
        expect(app).toBeDefined();
    });
});
//# sourceMappingURL=bookmarklet.spec.js.map