"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFaceDetection = void 0;
const react_1 = require("react");
const useFaceDetection = (state = []) => {
    const [faces, setFaces] = (0, react_1.useState)(state);
    const facesDetected = (0, react_1.useCallback)((data) => {
        setFaces(data.faces);
    }, []);
    return [faces, { facesDetected }];
};
exports.useFaceDetection = useFaceDetection;
