/**
 * Base class for all recognizers.
 * Recognizer is object that performs recognition of image
 * and updates its result with data extracted from the image.
 */
export declare class Recognizer {
    recognizerType: any;
    constructor(recognizerType: any);
}
/**
* Possible states of the Recognizer's result
*/
export declare const RecognizerResultState: Readonly<{
    /** Recognizer result is empty */
    empty: 0;
    /** Recognizer result contains some values, but is incomplete or it contains all values, but some are uncertain */
    uncertain: 1;
    /** Recognizer result contains all required values */
    valid: 2;
    stageValid: 3;
}>;
/**
 * Base class for all recognizer's result objects.
 * Recognizer result contains data extracted from the image.
 */
export declare class RecognizerResult {
    resultState: any;
    constructor(resultState: any);
}
//# sourceMappingURL=recognizer.d.ts.map