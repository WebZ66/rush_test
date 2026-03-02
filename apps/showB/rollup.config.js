import commonjs from '@rollup/plugin-commonjs'
import rollupTypescript from '@rollup/plugin-typescript'
/** @type {import("rollup").RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',  
      sourcemap: true
    }
  ],
  plugins: [
    commonjs(),
    // 支持 typescript，并导出声明文件
    rollupTypescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist'
    }),
  ]
}
