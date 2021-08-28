"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultVideoRecordOptions = exports.initialCameraState = void 0;
const react_native_1 = require("react-native");
exports.initialCameraState = {
    flashMode: 'on',
    zoom: 0,
    autoFocus: 'on',
    autoFocusPoint: {
        normalized: { x: 0.5, y: 0.5 },
        drawRectPosition: {
            x: react_native_1.Dimensions.get('window').width * 0.5 - 32,
            y: react_native_1.Dimensions.get('window').height * 0.5 - 32,
        },
    },
    focusDepth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    isRecording: false,
    canDetectFaces: false,
    canDetectText: false,
    canDetectBarcode: false,
    faces: [],
    textBlocks: [],
    barcodes: [],
};
exports.defaultVideoRecordOptions = {
    quality: '720p',
    orientation: 'auto',
    maxDuration: 5,
    mute: false,
    mirrorVideo: false,
    videoBitrate: 5000000,
};
