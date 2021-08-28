import { TakePictureOptions } from './interfaces';
export interface TakePictureResponse {
    width: number;
    height: number;
    uri: string;
    base64?: string;
    exif?: {
        [name: string]: any;
    };
    pictureOrientation: number;
    deviceOrientation: number;
}
export declare const takePicture: ({ cameraRef }: {
    cameraRef: any;
}, options?: TakePictureOptions) => Promise<TakePictureResponse | undefined>;
