"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCamera = void 0;
const react_1 = require("react");
const constants_1 = require("../constants");
const useAutoFocus_1 = require("./useAutoFocus");
const misc_1 = require("./misc");
const useBarcodeDetection_1 = require("./useBarcodeDetection");
const useFaceDetection_1 = require("./useFaceDetection");
const useTextRecognition_1 = require("./useTextRecognition");
const useToggle_1 = require("./useToggle");
const takePicture_1 = require("../takePicture");
const videoRecorder_1 = require("../videoRecorder");
const preview_1 = require("../preview");
const useCamera = (cameraOptions = constants_1.initialCameraState) => {
    const mergedCameraOptions = Object.assign(Object.assign({}, constants_1.initialCameraState), cameraOptions);
    const cameraRef = (0, react_1.useRef)(null);
    const [type, toggleFacing] = (0, useToggle_1.useToggleFacing)(mergedCameraOptions.type, ['front', 'back']);
    const [flashMode, { setFlash, toggleFlash }] = (0, useToggle_1.useFlash)(mergedCameraOptions.flashMode);
    const [whiteBalance, { setWhiteBalance, toggleWB }] = (0, useToggle_1.useWhiteBalance)(mergedCameraOptions.whiteBalance);
    const [autoFocus, toggleAutoFocus] = (0, useToggle_1.useAutoFocus)(mergedCameraOptions.autoFocus, ['on', 'off']);
    const [autoFocusPoint, { setAutoFocusPoint, touchToFocus }] = (0, useAutoFocus_1.useAutoFocusTouch)(mergedCameraOptions.autoFocusPoint);
    const [focusDepth, setFocusDepth] = (0, react_1.useState)(mergedCameraOptions.focusDepth);
    const [cameraState, { setCameraState, toggleCameraState }] = (0, misc_1.useCameraState)({});
    const [textBlocks, { textRecognized }] = (0, useTextRecognition_1.useTextRecognition)([]);
    const [faces, { facesDetected }] = (0, useFaceDetection_1.useFaceDetection)([]);
    const [barcodes, { barcodeRecognized }] = (0, useBarcodeDetection_1.useBarcodeDetection)([]);
    const [ratio, setRatio] = (0, react_1.useState)(mergedCameraOptions.ratio);
    const [isRecording, setIsRecording] = (0, react_1.useState)(false);
    const [zoom, { setZoom, zoomIn, zoomOut }] = (0, misc_1.useZoom)(mergedCameraOptions.zoom);
    const drawFocusRingPosition = (0, react_1.useMemo)(() => ({
        top: autoFocusPoint.drawRectPosition.y - 32,
        left: autoFocusPoint.drawRectPosition.x - 32,
    }), [autoFocusPoint]);
    return [
        {
            cameraRef,
            type,
            flashMode,
            whiteBalance,
            autoFocus,
            autoFocusPoint,
            zoom,
            focusDepth,
            cameraState,
            drawFocusRingPosition,
            textBlocks,
            faces,
            barcodes,
            ratio,
            isRecording,
        },
        {
            setFlash,
            setWhiteBalance,
            setZoom,
            setCameraState,
            setAutoFocusPoint,
            toggleFacing,
            toggleFlash,
            toggleWB,
            toggleAutoFocus,
            touchToFocus,
            zoomIn,
            zoomOut,
            setFocusDepth,
            toggleCameraState,
            takePicture: (options) => (0, takePicture_1.takePicture)({ cameraRef }, options),
            recordVideo: (options) => (0, videoRecorder_1.recordVideo)({ cameraRef }, options),
            stopRecording: () => (0, videoRecorder_1.stopRecording)({ cameraRef }),
            pausePreview: () => (0, preview_1.pausePreview)(cameraRef),
            isRecording,
            resumePreview: () => (0, preview_1.resumePreview)(cameraRef),
            setRatio,
            setIsRecording,
            barcodeRecognized,
            textRecognized,
            facesDetected,
        },
    ];
};
exports.useCamera = useCamera;
