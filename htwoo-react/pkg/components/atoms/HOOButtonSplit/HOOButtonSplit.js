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
import HOOFlyoutMenu from "../HOOFlyoutMenu/HOOFlyoutMenu";
import HOOIcon from "../HOOIcon/HOOIcon";
export var HOOButtonSplitType;
(function (HOOButtonSplitType) {
    HOOButtonSplitType[HOOButtonSplitType["Icon"] = 0] = "Icon";
    HOOButtonSplitType[HOOButtonSplitType["Standard"] = 1] = "Standard";
    HOOButtonSplitType[HOOButtonSplitType["Primary"] = 2] = "Primary";
})(HOOButtonSplitType || (HOOButtonSplitType = {}));
var HOOButtonSplitState = (function () {
    function HOOButtonSplitState() {
    }
    return HOOButtonSplitState;
}());
export { HOOButtonSplitState };
var HOOButtonSplit = (function (_super) {
    __extends(HOOButtonSplit, _super);
    function HOOButtonSplit(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "🔶HOOButtonSplit";
        _this._componentClass = "hoo-button";
        _this.LOG_SOURCE = props.dataComponent || "🔶HOOButtonSplit";
        switch (props.type) {
            case HOOButtonSplitType.Icon:
                _this._componentClass = _this._componentClass + "icon-split";
                break;
            case HOOButtonSplitType.Primary:
                _this._componentClass = _this._componentClass + "split-primary";
                break;
            case HOOButtonSplitType.Standard:
                _this._componentClass = _this._componentClass + "split-standard";
                break;
        }
        _this.state = new HOOButtonSplitState();
        return _this;
    }
    HOOButtonSplit.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    HOOButtonSplit.prototype.render = function () {
        var _a, _b;
        try {
            var className = ((_a = this.props.rootElementAttributes) === null || _a === void 0 ? void 0 : _a.className) ? this._componentClass + " " + ((_b = this.props.rootElementAttributes) === null || _b === void 0 ? void 0 : _b.className) : this._componentClass;
            return (React.createElement("div", __assign({ "data-component": this.LOG_SOURCE }, this.props.rootElementAttributes, { "aria-haspopup": "true", className: className }),
                React.createElement("button", { className: this._componentClass, "aria-haspopup": "true" },
                    React.createElement("span", { className: "hoo-button-icon", "aria-hidden": "true" },
                        React.createElement("div", { className: "hoo-button-label" }, this.props.label || this.props.children))),
                React.createElement("button", { className: this._componentClass + " hoo-buttonicon-flyout", "aria-haspopup": "true" },
                    React.createElement("span", { className: "hoo-button-icon hoo-buttonchevron" },
                        React.createElement(HOOIcon, { iconName: "" + (this.props.rightIconName || "icon-arrow-down") }))),
                this.props.flyoutContextItems &&
                    React.createElement(HOOFlyoutMenu, { contextItems: this.props.flyoutContextItems })));
        }
        catch (err) {
            Logger.write(this.LOG_SOURCE + " (render) - " + err, 3);
            return null;
        }
    };
    return HOOButtonSplit;
}(React.Component));
export default HOOButtonSplit;

//# sourceMappingURL=HOOButtonSplit.js.map
