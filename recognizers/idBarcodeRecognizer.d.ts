import { Recognizer, RecognizerResult } from '../recognizer';
import { Date } from '../types';
/**
 * Result object for IdBarcodeRecognizer.
 */
export declare class IdBarcodeRecognizerResult extends RecognizerResult {
    additionalNameInformation: any;
    address: any;
    age: any;
    barcodeType: any;
    city: any;
    dateOfBirth: Date | null;
    dateOfExpiry: Date | null;
    dateOfIssue: Date | null;
    documentAdditionalNumber: any;
    documentNumber: any;
    documentType: any;
    employer: any;
    endorsements: any;
    expired: any;
    extendedElements: any;
    firstName: any;
    fullName: any;
    issuingAuthority: any;
    jurisdiction: any;
    lastName: any;
    maritalStatus: any;
    middleName: any;
    nationality: any;
    personalIdNumber: any;
    placeOfBirth: any;
    postalCode: any;
    profession: any;
    race: any;
    rawData: any;
    religion: any;
    residentialStatus: any;
    restrictions: any;
    sex: any;
    street: any;
    stringData: any;
    uncertain: any;
    vehicleClass: any;
    constructor(nativeResult: any);
}
/**
 * The ID Barcode Recognizer is used for scanning ID Barcode.
 */
export declare class IdBarcodeRecognizer extends Recognizer {
    createResultFromNative: (nativeResult: any) => IdBarcodeRecognizerResult;
    constructor();
}
//# sourceMappingURL=idBarcodeRecognizer.d.ts.map