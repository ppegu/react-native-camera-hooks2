import { FlashMode } from '../types';
export declare const useFlash: (state?: any) => ["on" | "off" | "torch" | "auto", {
    toggleFlash: Function;
    setFlash: Function;
}];
export declare const useWhiteBalance: (state?: string) => [string, {
    toggleWB: Function;
    setWhiteBalance: Function;
}];
export declare const useAutoFocus: (state: string | undefined, toggleModes: any) => any[];
export declare const useToggleFacing: (state: string | undefined, toggleModes: any) => any[];
