//*@type {import('next').NextConfig}*/

export default {
    output: 'export',
    basePath: '/portfolio3', // デプロイ先リポジトリ名が 'portfolio3' の場合
    assetPrefix: '/portfolio3/',
    distDir: 'docs',
};

/*
export default {
    output: 'export',
    assetPrefix: './',
    basePath: '',
    trailingSlash: true,
}
*/