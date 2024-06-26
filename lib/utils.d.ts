/**
 * Checks if the given prop is an event prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's an event prop, false otherwise.
 */
export declare const isEventProp: (key: string | null | undefined) => boolean;
/**
 * Checks if the given prop is a typography prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a typography prop, false otherwise.
 */
export declare const isTypographyProp: (key: string | null | undefined) => boolean;
/**
 * Checks if the given prop is a style prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a style prop, false otherwise.
 */
export declare const isStyleProp: (key: string | null | undefined) => boolean;
/**
 * Checks if the given value is a function.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export declare const isFunction: (value: any) => value is Function;
/**
 * Checks if the given value is an object.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export declare const isObject: (value: any) => value is object;
/**
 * Checks if the given value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
export declare const isString: (value: any) => value is string;
/**
 * Checks if the given object is valid JSON.
 * @param {any} value - The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
export declare const isJSON: (value: any) => boolean;
/**
 * Checks if the given value is nullish (undefined or null).
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is undefined or null, otherwise false.
 */
export declare const isNullish: (value: any) => boolean;
