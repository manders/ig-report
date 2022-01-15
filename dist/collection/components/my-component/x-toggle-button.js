export class ToggleButton {
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
    static get style() { return "/**style-placeholder:x-toggle-button:**/"; }
}
