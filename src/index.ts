import validateParam from './decorator';
import { FOO, BAR } from './constants';
import { validate, join } from './utils';

/**
 * An example function just to show the build and ci pipeline works.
 *
 * @returns {string} Hello world.
 */
export default () => validateParam({ validate })(join)(FOO, BAR);
