
import { __ }
  from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts';

const { __filename, __dirname } = __(import.meta);

console.log('__dirname in example.ts:', __dirname);
console.log('__filename in example.ts:', __filename);

import { f } from 'dir/module.ts';

f();

