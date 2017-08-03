module.exports = {

    entry:{
		Header: './spec/headerTest.jsx',
		index: './src/index.js'
	},
    output: {
        path: __dirname,
        filename: "./public/bundles/[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    devServer: {
        inline: true,
        port: 6000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            },
            { 
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
	 resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },
  
	 node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
