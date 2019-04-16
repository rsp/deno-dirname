deno-dirname
=
Node-style `__dirname` and `__filename` polyfill for Deno

Inspired by [denoland/deno#2125](https://github.com/denoland/deno/issues/2125) issue by [@zekth](https://github.com/zekth)

Usage
-
```
import { __ } from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts';

const { __filename, __dirname } = __(import.meta);

console.log(__dirname);
console.log(__filename);
```

Issues
-
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
-
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[github-url]: https://github.com/rsp/deno-dirname
[readme-url]: https://github.com/rsp/deno-dirname#readme
[issues-url]: https://github.com/rsp/deno-dirname/issues
[license-url]: https://github.com/rsp/deno-dirname/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/deno-dirname
[travis-img]: https://travis-ci.org/rsp/deno-dirname.svg?branch=master
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&logo=github&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&logo=twitter&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
