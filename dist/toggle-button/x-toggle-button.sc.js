/*! Built with http://stenciljs.com */
const { h } = window.ToggleButton;

class ToggleButton {
    constructor() {
        this.type = "round";
        this.checkedColor = "#2196F3";
        this.uncheckedColor = "#ccc";
        this.checked = false;
    }
    componentDidLoad() {
        this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor);
    }
    toggleSwitch() {
        this.checked = this.checkbox.checked;
        this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor);
    }
    render() {
        const typeClass = `slider ${this.type}`;
        return (h("div", null,
            h("label", { onClick: this.toggleSwitch.bind(this), class: "switch" },
                h("input", { type: "checkbox", ref: (el) => this.checkbox = el, checked: this.checked }),
                h("span", { class: typeClass, ref: (el) => this.background = el }, "\u00A0"))));
    }
    static get is() { return "x-toggle-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
    }; }
    static get style() { return "\n.switch.sc-x-toggle-button {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n\n.switch.sc-x-toggle-button   input.sc-x-toggle-button {display:none;}\n\n\n.slider.sc-x-toggle-button {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  \n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\n.slider.sc-x-toggle-button:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\ninput.sc-x-toggle-button:checked    + .slider.sc-x-toggle-button {\n  \n}\n\ninput.sc-x-toggle-button:focus    + .slider.sc-x-toggle-button {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput.sc-x-toggle-button:checked    + .slider.sc-x-toggle-button:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n\n.slider.round.sc-x-toggle-button {\n  border-radius: 34px;\n}\n\n.slider.round.sc-x-toggle-button:before {\n  border-radius: 50%;\n}\n"; }
}

export { ToggleButton as XToggleButton };
