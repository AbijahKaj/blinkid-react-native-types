import { Recognizer, RecognizerResult } from '../recognizer';
import { MrzResult, ImageExtensionFactors } from '../types';
/**
 * Result object for MrtdCombinedRecognizer.
 */
export declare class MrtdCombinedRecognizerResult extends RecognizerResult {
    documentDataMatch: any;
    faceImage: any;
    fullDocumentBackImage: any;
    fullDocumentFrontImage: any;
    mrzResult: MrzResult | null;
    scanningFirstSideDone: any;
    constructor(nativeResult: any);
}
/**
 * MRTD Combined recognizer
 *
 * MRTD Combined recognizer is used for scanning both front and back side of generic IDs.
 */
export declare class MrtdCombinedRecognizer extends Recognizer {
    allowSpecialCharacters: boolean;
    allowUnparsedResults: boolean;
    allowUnverifiedResults: boolean;
    detectorType: number;
    faceImageDpi: number;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    numStableDetectionsThreshold: number;
    returnFaceImage: boolean;
    returnFullDocumentImage: boolean;
    createResultFromNative: (nativeResult: any) => MrtdCombinedRecognizerResult;
    constructor();
}
//# sourceMappingURL=mrtdCombinedRecognizer.d.ts.map