import { Face } from 'react-native-camera';
export declare const useFaceDetection: (state?: never[]) => [any[], {
    facesDetected: (response: {
        faces: Face[];
    }) => void;
}];
