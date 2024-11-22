//*@type {import('next').NextConfig}*/
import { writeFileSync } from 'fs';

export default {
    output: 'export',
    basePath: '/portfolio3', // デプロイ先リポジトリ名が 'portfolio3' の場合
    assetPrefix: '/portfolio3/',
    distDir: 'docs',
    async exportPathMap(defaultPathMap, { outDir }) {
        writeFileSync(`${outDir}/.nojekyll`, '');
        return defaultPathMap;
    }, 
};

/*
export default {
    output: 'export',
    assetPrefix: './',
    basePath: '',
    trailingSlash: true,
}
*/