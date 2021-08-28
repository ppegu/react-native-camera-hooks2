"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBarcodeDetection = void 0;
const react_1 = require("react");
const useBarcodeDetection = (state = []) => {
    const [barcodes, setBarcodes] = (0, react_1.useState)(state);
    const barcodeRecognized = (0, react_1.useCallback)((data) => {
        setBarcodes(data.barcodes);
    }, [setBarcodes]);
    return [barcodes, { barcodeRecognized }];
};
exports.useBarcodeDetection = useBarcodeDetection;
