export declare type Orientation = Readonly<{
    auto: any;
    landscapeLeft: any;
    landscapeRight: any;
    portrait: any;
    portraitUpsideDown: any;
}>;
export declare type OrientationNumber = 1 | 2 | 3 | 4;
export declare type AutoFocus = Readonly<{
    on: any;
    off: any;
}>;
export declare type VideoStabilization = Readonly<{
    off: any;
    standard: any;
    cinematic: any;
    auto: any;
}>;
export declare type FlashMode = Readonly<{
    on: any;
    off: any;
    torch: any;
    auto: any;
}>;
export declare type CameraType = Readonly<{
    front: any;
    back: any;
}>;
export declare type WhiteBalance = Readonly<{
    sunny: any;
    cloudy: any;
    shadow: any;
    incandescent: any;
    fluorescent: any;
    auto: any;
}>;
export declare type CustomWhiteBalance = {
    temperature: number;
    tint: number;
    redGainOffset?: number;
    greenGainOffset?: number;
    blueGainOffset?: number;
};
export declare type BarCodeType = Readonly<{
    aztec: any;
    code128: any;
    code39: any;
    code39mod43: any;
    code93: any;
    ean13: any;
    ean8: any;
    pdf417: any;
    qr: any;
    upc_e: any;
    interleaved2of5: any;
    itf14: any;
    datamatrix: any;
}>;
export declare type VideoQuality = Readonly<{
    '2160p': any;
    '1080p': any;
    '720p': any;
    '480p': any;
    '4:3': any;
    /** iOS Only. Android not supported. */
    '288p': any;
}>;
export declare type VideoCodec = Readonly<{
    H264: symbol;
    JPEG: symbol;
    HVEC: symbol;
    AppleProRes422: symbol;
    AppleProRes4444: symbol;
}>;
export declare type ImageType = Readonly<{
    jpeg: any;
    png: any;
}>;
export declare type FaceDetectionClassifications = Readonly<{
    all: any;
    none: any;
}>;
export declare type FaceDetectionLandmarks = Readonly<{
    all: any;
    none: any;
}>;
export declare type FaceDetectionMode = Readonly<{
    fast: any;
    accurate: any;
}>;
export declare type GoogleVisionBarcodeType = Readonly<{
    CODE_128: any;
    CODE_39: any;
    CODABAR: any;
    DATA_MATRIX: any;
    EAN_13: any;
    EAN_8: any;
    ITF: any;
    QR_CODE: any;
    UPC_A: any;
    UPC_E: any;
    PDF417: any;
    AZTEC: any;
    ALL: any;
}>;
export declare type GoogleVisionBarcodeMode = Readonly<{
    NORMAL: any;
    ALTERNATE: any;
    INVERTED: any;
}>;
export declare type Self<T> = {
    [P in keyof T]: P;
};
export declare type CameraStatus = Readonly<Self<{
    READY: any;
    PENDING_AUTHORIZATION: any;
    NOT_AUTHORIZED: any;
}>>;
export declare type RecordAudioPermissionStatus = Readonly<Self<{
    AUTHORIZED: 'AUTHORIZED';
    PENDING_AUTHORIZATION: 'PENDING_AUTHORIZATION';
    NOT_AUTHORIZED: 'NOT_AUTHORIZED';
}>>;
