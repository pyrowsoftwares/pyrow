import fs from 'fs';
import path from 'path';

const nativeFile = path.resolve('node_modules/rollup/dist/native.js');
if (fs.existsSync(nativeFile)) {
  let content = fs.readFileSync(nativeFile, 'utf8');
  if (!content.includes('@rollup/wasm-node/dist/native.js')) {
    content = content.replace(
      /const nativeModule = requireWithFriendlyError\([\s\S]*?\);/,
      `let nativeModule;
try {
\tnativeModule = requireWithFriendlyError(
\t\texistsSync(path.join(__dirname, localName)) ? localName : \`@rollup/rollup-\${packageBase}\`
\t);
} catch (e) {
\ttry {
\t\tnativeModule = require('@rollup/wasm-node/dist/native.js');
\t} catch (e2) {
\t\tthrow e;
\t}
}`
    );
    fs.writeFileSync(nativeFile, content, 'utf8');
    console.log('[Pyrow] Successfully patched Rollup with WebAssembly fallback.');
  }
}

