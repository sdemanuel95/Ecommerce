const webpack = require('webpack');
const path = require('path');

module.export = {
    devtool: 'cheap-module-eval-source-map',
    resolve : {
        extensions : ['.js','.jsx'],
        modules : [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },

    entry : [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',

        path.join(__dirname, 'src', 'index.jsx')
    ],

    output : {
        path : path.join(__dirname, 'build'),
        filename : 'bundle.js',
        publicPath: '/'
    },

    module:{
        rules : [
            {
                rest : /\.jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,

                use: [
                    { loader : 'style-loader'},
                    { loader : 'css.loader'}
                ]
            },
            {
                test: /\.eot(\?v=\d+\-\d+\-\d+)?$/,
                use: 'file-loader'
            },

            {
                test : /\(woff|woffs)$/,
                use :'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use:'url-loader?limit=1000&mimetype=application/octec-stream',
                
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use:'url-loader?limit=1000&mimetype=image/svg+xml',
                
            }
            
        ]
    },


    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title : 'Redeux Ecommerce',
            template : path.join(__dirname, 'src' , 'index.html'), 
            filename: 'index.html'
        })
        ],
        
    deveServer : {
        host : '0.0.0.0',
        hot : true,
        port : 8080,
        inline : true,
        contentBase : path.join(__dirname,'src'),
        historyApiFallback : true 
    }

}