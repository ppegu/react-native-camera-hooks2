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
exports.takePicture = void 0;
const interfaces_1 = require("./interfaces");
const takePicture = ({ cameraRef }, options = interfaces_1.defaultPictureTakeOptions) => __awaiter(void 0, void 0, void 0, function* () {
    if (cameraRef && cameraRef.takePictureAsync) {
        return cameraRef.takePictureAsync(options);
    }
    else if (cameraRef && cameraRef.current && cameraRef.current.takePictureAsync) {
        return cameraRef.current.takePictureAsync(options);
    }
});
exports.takePicture = takePicture;
