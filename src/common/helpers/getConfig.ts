import { join, resolve } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(join(resolve('./'), 'config', 'develop.json'));

export default config;
