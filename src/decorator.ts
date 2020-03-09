/**
 * A decorator configurable to validate the param type of a function.
 *
 * @param {object} options - Config.
 * @param options.validate - The validation method.
 * @param options.skip - Whether to skip the check.
 * @returns {Function} - The decorated.
 */
export const validateParam = ({
  validate = (...args) => false,
  skip = false,
}) => action => (
  ...args
) => {
  if (skip) return action(...args);
  if (validate(...args)) return action(...args);
  throw Error('function validation failed');
};

export default validateParam;
