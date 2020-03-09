// @ts-check

/**
 * Join two strings with a space.
 */
export const join = (a: string, b: string): string => `${a} ${b}`;

/**
 * An example function to show JSDoc works with object destruction in function params.
 */
export const validate = (a: string, b: string): boolean => {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  return true;
};
