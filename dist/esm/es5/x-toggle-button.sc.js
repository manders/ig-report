/*! Built with http://stenciljs.com */
import { h } from './toggle-button.core.js';
var ToggleButton = /** @class */ (function () {
    function ToggleButton() {
        this.type = "round";
        this.checkedColor = "#2196F3";
        this.uncheckedColor = "#ccc";
        this.checked = false;
    }
    ToggleButton.prototype.componentDidLoad = function () {
        this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor);
    };
    ToggleButton.prototype.toggleSwitch = function () {
        this.checked = this.checkbox.checked;
        this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor);
    };
    ToggleButton.prototype.render = function () {
        var _this = this;
        var typeClass = "slider " + this.type;
        return (h("div", null, h("label", { onClick: this.toggleSwitch.bind(this), class: "switch" }, h("input", { type: "checkbox", ref: function (el) { return _this.checkbox = el; }, checked: this.checked }), h("span", { class: typeClass, ref: function (el) { return _this.background = el; } }, "\u00A0"))));
    };
    Object.defineProperty(ToggleButton, "is", {
        get: function () { return "x-toggle-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton, "properties", {
        get: function () {
            return {
                "checked": {
                    "type": Boolean,
                    "attr": "checked",
                    "mutable": true
                },
                "checkedColor": {
                    "type": String,
                    "attr": "checked-color"
                },
                "type": {
                    "type": String,
                    "attr": "type"
                },
                "uncheckedColor": {
                    "type": String,
                    "attr": "unchecked-color"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton, "style", {
        get: function () { return "\n.switch.sc-x-toggle-button {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n\n.switch.sc-x-toggle-button   input.sc-x-toggle-button {display:none;}\n\n\n.slider.sc-x-toggle-button {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  \n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\n.slider.sc-x-toggle-button:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\ninput.sc-x-toggle-button:checked    + .slider.sc-x-toggle-button {\n  \n}\n\ninput.sc-x-toggle-button:focus    + .slider.sc-x-toggle-button {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput.sc-x-toggle-button:checked    + .slider.sc-x-toggle-button:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n\n.slider.round.sc-x-toggle-button {\n  border-radius: 34px;\n}\n\n.slider.round.sc-x-toggle-button:before {\n  border-radius: 50%;\n}\n"; },
        enumerable: true,
        configurable: true
    });
    return ToggleButton;
}());
export { ToggleButton as XToggleButton };
