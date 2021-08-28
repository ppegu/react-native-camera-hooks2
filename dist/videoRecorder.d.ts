import { RecordOptions, RecordResponse } from './interfaces';
export declare const recordVideo: ({ cameraRef }: any, options?: RecordOptions) => Promise<RecordResponse | undefined>;
export declare const stopRecording: ({ cameraRef }: any) => Promise<any>;
