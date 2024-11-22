//*@type {import('next').NextConfig}*/

// GitHub Pages用

export default {
    output: 'export',
    basePath:'/portfolio3', // デプロイ先リポジトリ名が 'portfolio3' の場合
    assetPrefix:'/portfolio3/',
    distDir: 'docs',
    trailingSlash: true,
    publicRuntimeConfig: {
        basePath: '/portfolio3', // ランタイムで利用可能な basePath
    },
};


// ローカルホスト用
/*
export default {
    output: 'export',
    assetPrefix: './',
    basePath: '',
    trailingSlash: true,
}
*/