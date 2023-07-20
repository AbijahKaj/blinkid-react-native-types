import { Recognizer, RecognizerResult } from '../recognizer';
import { Quadrilateral, ImageExtensionFactors } from '../types';
/**
 * Result object for DocumentFaceRecognizer.
 */
export declare class DocumentFaceRecognizerResult extends RecognizerResult {
    documentLocation: Quadrilateral | null;
    faceImage: any;
    faceLocation: Quadrilateral | null;
    fullDocumentImage: any;
    constructor(nativeResult: any);
}
/**
 * Class for configuring Document Face Recognizer Recognizer.
 *
 * Document Face Recognizer recognizer is used for scanning documents containing face images.
 */
export declare class DocumentFaceRecognizer extends Recognizer {
    detectorType: number;
    faceImageDpi: number;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    numStableDetectionsThreshold: number;
    returnFaceImage: boolean;
    returnFullDocumentImage: boolean;
    createResultFromNative: (nativeResult: any) => DocumentFaceRecognizerResult;
    constructor();
}
//# sourceMappingURL=documentFaceRecognizer.d.ts.map