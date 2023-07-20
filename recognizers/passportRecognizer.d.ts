import { Recognizer, RecognizerResult } from '../recognizer';
import { MrzResult, ImageExtensionFactors } from '../types';
/**
 * Result object for PassportRecognizer.
 */
export declare class PassportRecognizerResult extends RecognizerResult {
    faceImage: any;
    fullDocumentImage: any;
    mrzResult: MrzResult | null;
    constructor(nativeResult: any);
}
/**
 * Recognizer which can scan all passports with MRZ.
 */
export declare class PassportRecognizer extends Recognizer {
    anonymizeNetherlandsMrz: boolean;
    detectGlare: boolean;
    faceImageDpi: number;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    returnFaceImage: boolean;
    returnFullDocumentImage: boolean;
    createResultFromNative: (nativeResult: any) => PassportRecognizerResult;
    constructor();
}
//# sourceMappingURL=passportRecognizer.d.ts.map