import { Recognizer, RecognizerResult } from '../recognizer';
/**
 * Result object for SuccessFrameGrabberRecognizer.
 */
export declare class SuccessFrameGrabberRecognizerResult extends RecognizerResult {
    successFrame: any;
    slaveRecognizerResult: any;
    constructor(nativeResult: any, slaveRecognizerResult: any);
}
/**
 * SuccessFrameGrabberRecognizer can wrap any other recognizer and obtain camera
 * frame on which the other recognizer finished recognition.
 */
export declare class SuccessFrameGrabberRecognizer extends Recognizer {
    slaveRecognizer: any;
    createResultFromNative: any;
    constructor(slaveRecognizer: any);
}
//# sourceMappingURL=successFrameGrabberRecognizer.d.ts.map