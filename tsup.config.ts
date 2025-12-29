import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'straight/regular/index': 'src/straight/regular/index.ts',
    'straight/thin/index': 'src/straight/thin/index.ts',
    'straight/bold/index': 'src/straight/bold/index.ts',
    'straight/solid/index': 'src/straight/solid/index.ts',
    'rounded/regular/index': 'src/rounded/regular/index.ts',
    'rounded/thin/index': 'src/rounded/thin/index.ts',
    'rounded/bold/index': 'src/rounded/bold/index.ts',
    'rounded/solid/index': 'src/rounded/solid/index.ts',
    'duotone/chubby/index': 'src/duotone/chubby/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: false, // Disabled due to 37k components causing memory issues
  splitting: false,
  clean: true,
  treeshake: true,
  minify: false,
  external: ['react']
});
