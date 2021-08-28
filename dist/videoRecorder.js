"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopRecording = exports.recordVideo = void 0;
const constants_1 = require("./constants");
const recordVideo = ({ cameraRef }, options = constants_1.defaultVideoRecordOptions) => __awaiter(void 0, void 0, void 0, function* () {
    if (cameraRef && cameraRef.recordAsync) {
        return cameraRef.recordAsync(options);
    }
    else if (cameraRef && cameraRef.current && cameraRef.current.recordAsync) {
        return cameraRef.current.recordAsync(options);
    }
});
exports.recordVideo = recordVideo;
const stopRecording = ({ cameraRef }) => __awaiter(void 0, void 0, void 0, function* () {
    if (cameraRef && cameraRef.stopRecording) {
        return cameraRef.stopRecording();
    }
    else if (cameraRef && cameraRef.current && cameraRef.current.stopRecording) {
        return cameraRef.current.stopRecording();
    }
});
exports.stopRecording = stopRecording;
