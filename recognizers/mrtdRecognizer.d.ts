import { Recognizer, RecognizerResult } from '../recognizer';
import { MrzResult, ImageExtensionFactors } from '../types';
/**
 * Result object for MrtdRecognizer.
 */
export declare class MrtdRecognizerResult extends RecognizerResult {
    fullDocumentImage: any;
    mrzResult: MrzResult | null;
    constructor(nativeResult: any);
}
/**
 * Recognizer that can recognizer Machine Readable Zone (MRZ) of the Machine Readable Travel Document (MRTD)
 */
export declare class MrtdRecognizer extends Recognizer {
    allowSpecialCharacters: boolean;
    allowUnparsedResults: boolean;
    allowUnverifiedResults: boolean;
    detectGlare: boolean;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    returnFullDocumentImage: boolean;
    createResultFromNative: (nativeResult: any) => MrtdRecognizerResult;
    constructor();
}
//# sourceMappingURL=mrtdRecognizer.d.ts.map