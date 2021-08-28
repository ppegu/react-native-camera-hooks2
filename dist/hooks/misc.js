"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCameraState = exports.useZoom = void 0;
const react_1 = require("react");
const useZoom = (state = 0) => {
    const [zoom, setZoom] = (0, react_1.useState)(state);
    const zoomIn = () => {
        if (zoom + 0.01 <= 1 && zoom + 0.01 >= 0) {
            setZoom(zoom + 0.01);
        }
    };
    const zoomOut = () => {
        if (zoom - 0.1 <= 1 && zoom - 0.1 >= 0) {
            setZoom(zoom - 0.1);
        }
    };
    return [
        zoom,
        {
            setZoom,
            zoomIn,
            zoomOut,
        },
    ];
};
exports.useZoom = useZoom;
const useCameraState = (state = {}) => {
    const [cameraState, setCameraState] = (0, react_1.useState)(state);
    const toggleCameraState = (newCameraState) => {
        setCameraState({ [newCameraState]: !cameraState[newCameraState] });
    };
    return [
        cameraState,
        {
            toggleCameraState,
            setCameraState,
        },
    ];
};
exports.useCameraState = useCameraState;
