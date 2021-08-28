"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggleFacing = exports.useAutoFocus = exports.useWhiteBalance = exports.useFlash = void 0;
const react_1 = require("react");
const constants_1 = require("../constants");
const useToggle = (initialState = '', values = []) => {
    const [state, setState] = (0, react_1.useState)(initialState);
    return [state, () => setState(!values ? (_state) => !_state : state === values[0] ? values[1] : values[0])];
};
const useFlash = (state = '') => {
    const [flashMode, setFlash] = (0, react_1.useState)(state);
    const toggleFlash = () => {
        setFlash(constants_1.flashModeOrder[flashMode]);
    };
    return [
        flashMode,
        {
            toggleFlash,
            setFlash,
        },
    ];
};
exports.useFlash = useFlash;
const useWhiteBalance = (state = '') => {
    const [whiteBalance, setWhiteBalance] = (0, react_1.useState)(state);
    const toggleWB = () => {
        Object.keys(constants_1.wbOrder).indexOf(whiteBalance);
        setWhiteBalance(constants_1.wbOrder[whiteBalance]);
    };
    return [
        whiteBalance,
        {
            toggleWB,
            setWhiteBalance,
        },
    ];
};
exports.useWhiteBalance = useWhiteBalance;
const useAutoFocus = (state = '', toggleModes) => {
    const [autoFocus, toggleAutoFocus] = useToggle(state, toggleModes);
    return [autoFocus, toggleAutoFocus];
};
exports.useAutoFocus = useAutoFocus;
const useToggleFacing = (state = '', toggleModes) => {
    const [type, toggleFacing] = useToggle(state, toggleModes);
    return [type, toggleFacing];
};
exports.useToggleFacing = useToggleFacing;
