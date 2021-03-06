import path from 'path';

import matchAll from 'string.prototype.matchall';

const URL_PATTERN = /url\(['"]?(\/?[^)"']+)['"]?\)/g;

export default function findCSSAssetPaths({ css, source }) {
  const paths = Array.from(matchAll(css, URL_PATTERN))
    .map((match) => match[1])
    .filter((url) => !/^http|\/\//.test(url));
  if (!source) {
    return paths.map((p) => ({ assetPath: p, resolvePath: p }));
  }
  const dir = path.dirname(source);
  return paths.map((url) => {
    if (url.startsWith('/')) {
      // absolute url
      return { assetPath: url, resolvePath: url };
    }
    const assetPath = path.join(dir, url);
    return { assetPath, resolvePath: url };
  });
}
