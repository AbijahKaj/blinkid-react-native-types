/**
 * Base class for all parsers.
 * Parser is object that performs specific parsing
 * and updates its result with data extracted from the image.
 */
export declare class Parser {
    parserType: any;
    required: boolean;
    constructor(parserType: any);
}
/**
* Possible states of the Parser's result
*/
export declare const ParserResultState: Readonly<{
    /** Parser result is empty */
    empty: 0;
    /** Parser result contains some values, but is incomplete or it contains all values, but some are uncertain */
    uncertain: 1;
    /** Parser result contains all required values */
    valid: 2;
}>;
/**
 * Base class for all parsers's result objects.
 * Parser result contains data extracted from the image.
 */
export declare class ParserResult {
    resultState: any;
    constructor(resultState: any);
}
//# sourceMappingURL=parser.d.ts.map