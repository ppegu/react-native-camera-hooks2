"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoFocusTouch = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useAutoFocusTouch = (state = {}) => {
    const [autoFocusPoint, setAutoFocusPoint] = (0, react_1.useState)(state);
    const touchToFocus = (0, react_1.useCallback)((event) => {
        const { pageX, pageY } = event.nativeEvent;
        const screenWidth = react_native_1.Dimensions.get('window').width;
        const screenHeight = react_native_1.Dimensions.get('window').height;
        const isPortrait = screenHeight > screenWidth;
        let x = pageX / screenWidth;
        let y = pageY / screenHeight;
        // Coordinate transform for portrait. See autoFocusPointOfInterest in docs for more info
        if (isPortrait) {
            x = pageY / screenHeight;
            y = -(pageX / screenWidth) + 1;
        }
        setAutoFocusPoint({
            normalized: { x, y },
            drawRectPosition: { x: pageX, y: pageY },
        });
    }, []);
    return [
        autoFocusPoint,
        {
            touchToFocus,
            setAutoFocusPoint,
        },
    ];
};
exports.useAutoFocusTouch = useAutoFocusTouch;
