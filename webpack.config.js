const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                {family: "Montserrat"},
                {family: "Roboto", variants: ["400", "700italic"]}
            ]
        })
    ]
};