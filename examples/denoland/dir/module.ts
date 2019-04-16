
import { __ } from 'https://deno.land/x/dirname/mod.ts';

const { __filename, __dirname } = __(import.meta);

export function f() {
  console.log('__dirname in dir/module.ts:', __dirname);
  console.log('__filename in dir/module.ts:', __filename);
}

