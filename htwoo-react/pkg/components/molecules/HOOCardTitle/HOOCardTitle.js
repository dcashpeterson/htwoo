var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { Logger } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
var HOOCardTitleState = (function () {
    function HOOCardTitleState() {
    }
    return HOOCardTitleState;
}());
export { HOOCardTitleState };
var HOOCardTitle = (function (_super) {
    __extends(HOOCardTitle, _super);
    function HOOCardTitle(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOCardTitle";
        _this._componentClass = "hoo-cardtitle";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOCardTitle";
        _this.state = new HOOCardTitleState();
        return _this;
    }
    HOOCardTitle.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOCardTitle.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { className: className }),
                this.props.title && this.props.title,
                !this.props.title && this.props.children));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOCardTitle;
}(React.Component));
export default HOOCardTitle;

//# sourceMappingURL=HOOCardTitle.js.map
