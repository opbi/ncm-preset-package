/**
 * Join to string with a space.
 * @param  {string} a - First string.
 * @param  {string} b - Second string.
 * @returns {string}   Joint result.
 */
export const join = (a, b) => `${a} ${b}`;

/**
 * An example function to show JSDoc works with object destruction in function params.
 * @param  {Object} input - Input.
 * @param  {string} input.foo  - Foo.
 * @param  {string} input.bar  - Bar.
 * @returns {boolean}             Whether the type of the inputs are strings.
 */
export const validate = ({ foo, bar }) => {
  if (typeof foo !== 'string' || typeof bar !== 'string') return false;
  return true;
};
