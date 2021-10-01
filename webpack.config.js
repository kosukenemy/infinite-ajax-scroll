module.exports = {
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
        },
        ],
    },
    resolve: {
        // 拡張子を配列で指定
        extensions: [
        '.ts', '.js',
        ],
    },
};