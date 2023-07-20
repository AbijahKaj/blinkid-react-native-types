/**
 * This exposes the appropriate native BlinkID module module as a JS module, based on
 * detected platform: Android or iOS. This has functions:
 * -> 'scanWithCamera' which takes the following parameters:
 * 1. Object overlaySettings: instance of OverlaySettings, contains settings for desired camera overlay
 * 2. RecognizerCollection recognizerCollection: object containing recognizers to use for scanning
 * 3. String license: BlinkID base64 license key bound to application ID for Android or iOS. To obtain
 *                       valid license key, please visit http://microblink.com/login or
 *                       contact us at http://help.microblink.com
 *
 *    OR
 *
 *    Object license: containing:
 *               - mandatory parameter 'licenseKey': base64 license key bound to application ID
 *                       for Android or iOS. To obtain valid license key, please visit
 *                       http://microblink.com/login or contact us at http://help.microblink.com
 *               - optioanl parameter 'licensee' when license for multiple apps is used
 *               - optional flag 'showTrialLicenseKeyWarning' which indicates
 *                  whether warning for trial license key will be shown
 *        in format
 *  {
 *      licenseKey: '<base64iOSLicense or base64AndroidLicense>',
 *      licensee: String,
 *      showTrialLicenseKeyWarning: Boolean
 *  }
 */
declare class BlinkIDWrapper {
    scanWithCamera(overlaySettings: any, recognizerCollection: any, license: any): Promise<any[]>;
}
export declare var BlinkID: BlinkIDWrapper;
/**
 * Represents a collection of recognizer objects.
 */
export declare class RecognizerCollection {
    recognizerArray: any;
    allowMultipleResults: boolean;
    milisecondsBeforeTimeout: number;
    /**
     *
     * @param recognizerArray Array of recognizer objects that will be used for recognition. Must not be empty!
     */
    constructor(recognizerArray: any);
}
export { RecognizerResultState } from './recognizer';
export * from './types';
export * from './overlays/blinkidOverlays';
export * from './recognizers/successFrameGrabberRecognizer';
export * from './recognizers/blinkIdMultiSideRecognizer';
export * from './recognizers/blinkIdSingleSideRecognizer';
export * from './recognizers/documentFaceRecognizer';
export * from './recognizers/idBarcodeRecognizer';
export * from './recognizers/mrtdCombinedRecognizer';
export * from './recognizers/mrtdRecognizer';
export * from './recognizers/passportRecognizer';
export * from './recognizers/visaRecognizer';
export * from './recognizers/usdlRecognizer';
export * from './recognizers/usdlCombinedRecognizer';
//# sourceMappingURL=index.d.ts.map