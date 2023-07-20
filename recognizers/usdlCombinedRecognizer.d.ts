import { Recognizer, RecognizerResult } from '../recognizer';
import { ImageExtensionFactors, Date } from '../types';
/**
 * Result object for UsdlCombinedRecognizer.
 */
export declare class UsdlCombinedRecognizerResult extends RecognizerResult {
    documentDataMatch: any;
    faceImage: any;
    fullDocumentImage: any;
    scanningFirstSideDone: any;
    optionalElements: any;
    rawData: any;
    rawStringData: any;
    uncertain: any;
    fields: any;
    firstName: any;
    middleName: any;
    lastName: any;
    fullName: any;
    nameSuffix: any;
    address: any;
    documentNumber: any;
    sex: any;
    restrictions: any;
    endorsements: any;
    vehicleClass: any;
    dateOfBirth: Date | null;
    dateOfIssue: Date | null;
    dateOfExpiry: Date | null;
    age: any;
    constructor(nativeResult: any);
}
/**
 * USDL Combined Recognizer.
 *
 * USDL Combined recognizer is used for scanning both front and back side of US Driver's License.
 */
export declare class UsdlCombinedRecognizer extends Recognizer {
    faceImageDpi: number;
    fullDocumentImageDpi: number;
    returnFaceImage: boolean;
    returnFullDocumentImage: boolean;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    numStableDetectionsThreshold: number;
    createResultFromNative: (nativeResult: any) => UsdlCombinedRecognizerResult;
    constructor();
}
//# sourceMappingURL=usdlCombinedRecognizer.d.ts.map