import { StyleProps } from "./constants";

/**
 * Checks if the given prop is a event prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a event or false otherwise.
 */
export const isEventProp = (key: string) => key.startsWith("on") && key.length > 2;

/**
 * Checks if the given prop is a style prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a style or false otherwise.
 */
export const isStyleProp = (key: string) => StyleProps.some((prop) => key.includes(prop));

/**
 * Checks if the given value is a function.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export const isFunction = (value: any): value is Function => typeof value === "function";

/**
 * Checks if the given value is an object.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export const isObject = (value: any): value is object => typeof value === "object";

/**
 * Checks if the given value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
export const isString = (value: any): value is string => typeof value === "string";

/**
 * Checks if the given object is valid JSON.
 * @param {any} value - The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
export const isJSON = (value: any): boolean => {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Checks if the given value is nullish (undefined or null).
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is undefined or null, otherwise false.
 */
export const isNullish = (value: any): boolean => value === undefined || value === null;
