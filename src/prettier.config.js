module.exports = {
    ...require('@spothero/prettier-config'),
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.scss',
            options: {
                singleQuote: false,
            },
        },
        {
            files: ['.babelrc', '.eslintrc', '.postcssrc'],
            options: {
                parser: 'json',
            },
        },
    ],
};
