import { Recognizer, RecognizerResult } from '../recognizer';
import { Date, MrzResult, RecognitionModeFilter, ImageExtensionFactors } from '../types';
/**
 * Result object for BlinkIdSingleSideRecognizer.
 */
export declare class BlinkIdSingleSideRecognizerResult extends RecognizerResult {
    additionalAddressInformation: any;
    additionalNameInformation: any;
    additionalOptionalAddressInformation: any;
    additionalProcessingInfo: any;
    address: any;
    age: any;
    barcodeCameraFrame: any;
    barcodeResult: any;
    cameraFrame: any;
    classInfo: any;
    dateOfBirth: Date | null;
    dateOfExpiry: Date | null;
    dateOfExpiryPermanent: any;
    dateOfIssue: Date | null;
    documentAdditionalNumber: any;
    documentNumber: any;
    documentOptionalAdditionalNumber: any;
    driverLicenseDetailedInfo: any;
    employer: any;
    expired: any;
    faceImage: any;
    fathersName: any;
    firstName: any;
    fullDocumentImage: any;
    fullName: any;
    imageAnalysisResult: any;
    issuingAuthority: any;
    lastName: any;
    localizedName: any;
    maritalStatus: any;
    mothersName: any;
    mrzResult: MrzResult | null;
    nationality: any;
    personalIdNumber: any;
    placeOfBirth: any;
    processingStatus: any;
    profession: any;
    race: any;
    recognitionMode: any;
    religion: any;
    residentialStatus: any;
    sex: any;
    signatureImage: any;
    vizResult: any;
    constructor(nativeResult: any);
}
/**
 * The Blink ID Recognizer is used for scanning Blink ID.
 */
export declare class BlinkIdSingleSideRecognizer extends Recognizer {
    allowBlurFilter: boolean;
    allowUnparsedMrzResults: boolean;
    allowUnverifiedMrzResults: boolean;
    anonymizationMode: number;
    faceImageDpi: number;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    paddingEdge: number;
    recognitionModeFilter: RecognitionModeFilter;
    returnFaceImage: boolean;
    returnFullDocumentImage: boolean;
    returnSignatureImage: boolean;
    saveCameraFrames: boolean;
    scanCroppedDocumentImage: boolean;
    signatureImageDpi: number;
    validateResultCharacters: boolean;
    createResultFromNative: (nativeResult: any) => BlinkIdSingleSideRecognizerResult;
    constructor();
}
//# sourceMappingURL=blinkIdSingleSideRecognizer.d.ts.map