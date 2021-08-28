"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextRecognition = void 0;
const react_1 = require("react");
const useTextRecognition = (state = []) => {
    const [textBlocks, setTextblocks] = (0, react_1.useState)(state);
    const textRecognized = (0, react_1.useCallback)((data) => {
        setTextblocks(data.textBlocks);
    }, []);
    return [textBlocks, { textRecognized }];
};
exports.useTextRecognition = useTextRecognition;
