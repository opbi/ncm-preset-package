/**
 * @callback Validator {(...args: any) => boolean}
 */

/**
 * A decorator configurable to validate the param type of a function
 *
 * @param {object} config - config options
 * @param {Validator} config.validator - The validation method
 * @returns {Function} - The decorated
 */
const inputValidation =
  ({ validator }) =>
  (action) =>
  (...args) => {
    if (validator(...args)) return action(...args);
    throw Error('function validation failed');
  };

export default inputValidation;
