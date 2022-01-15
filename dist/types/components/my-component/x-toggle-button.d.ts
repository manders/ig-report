import '../../stencil.core';
export declare class ToggleButton {
    checkbox: HTMLInputElement;
    background: HTMLSpanElement;
    type: string;
    checkedColor: string;
    uncheckedColor: string;
    checked: boolean;
    componentDidLoad(): void;
    toggleSwitch(): void;
    render(): JSX.Element;
}
