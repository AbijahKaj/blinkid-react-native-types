import { Recognizer, RecognizerResult } from '../recognizer';
import { MrzResult, ImageExtensionFactors } from '../types';
/**
 * Result object for VisaRecognizer.
 */
export declare class VisaRecognizerResult extends RecognizerResult {
    faceImage: any;
    fullDocumentImage: any;
    mrzResult: MrzResult | null;
    constructor(nativeResult: any);
}
/**
 * Recognizer which can scan all visas with MRZ.
 */
export declare class VisaRecognizer extends Recognizer {
    detectGlare: boolean;
    faceImageDpi: number;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    returnFaceImage: boolean;
    returnFullDocumentImage: boolean;
    createResultFromNative: (nativeResult: any) => VisaRecognizerResult;
    constructor();
}
//# sourceMappingURL=visaRecognizer.d.ts.map