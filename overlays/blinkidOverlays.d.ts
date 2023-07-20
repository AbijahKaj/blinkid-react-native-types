import { OverlaySettings } from '../overlaySettings';
/**
 * Class for setting up document overlay.
 * Document overlay is best suited for recognizers that perform ID document scanning.
 */
export declare class DocumentOverlaySettings extends OverlaySettings {
    constructor();
}
/**
 * Class for setting up BlinkId overlay.
 * BlinkId overlay is best suited for recognizers that perform ID document scanning.
 */
export declare class BlinkIdOverlaySettings extends OverlaySettings {
    firstSideInstructionsText: null;
    flipInstructions: null;
    errorMoveCloser: null;
    errorMoveFarther: null;
    sidesNotMatchingTitle: null;
    sidesNotMatchingMessage: null;
    unsupportedDocumentTitle: null;
    unsupportedDocumentMessage: null;
    recognitionTimeoutTitle: null;
    recognitionTimeoutMessage: null;
    retryButtonText: null;
    requireDocumentSidesDataMatch: boolean;
    language: null;
    showNotSupportedDialog: boolean;
    showFlashlightWarning: boolean;
    backSideScanningTimeoutMilliseconds: number;
    scanBarcodeText: null;
    errorDocumentTooCloseToEdge: null;
    constructor();
}
/**
 * Class for setting up document verification overlay.
 * Document verification overlay is best suited for combined recognizers - recognizer that perform scanning of both sides of ID documents.
 */
export declare class DocumentVerificationOverlaySettings extends OverlaySettings {
    firstSideSplashMessage: null;
    secondSideSplashMessage: null;
    scanningDoneSplashMessage: null;
    firstSideInstructions: null;
    secondSideInstructions: null;
    glareMessage: null;
    constructor();
}
//# sourceMappingURL=blinkidOverlays.d.ts.map