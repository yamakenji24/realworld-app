/* eslint-disable import/no-extraneous-dependencies */
import * as VitestConfig from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default VitestConfig.defineConfig({
  test: {
    // See the list of config options in the Config Reference:
    // https://vitest.dev/config/
    environment: 'jsdom',
    globals: true,
    includeSource: ['app/**/*.{ts,tsx}'],
    exclude: ['node_modules'],
  },
  plugins: [react(), tsconfigPaths()],
});
