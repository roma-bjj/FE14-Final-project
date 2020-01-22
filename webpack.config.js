const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {
    	splitChunks: {
    		chunks: 'all'
    	}
    }

    if(isProd) {
    	config.minimizer = [
    		new TerserWebpackPlugin(),
    		new OptimizeCssAssetsWebpackPlugin()
    	]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
	const loaders = [{
            	loader: MiniCssExtractPlugin.loader,
            	options: {
              		hmr: isDev,
              		reloadAll: true
            	},
          }, 
          'css-loader']

          if(extra) {
          	loaders.push(extra)
          }

    return loaders
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill','./index.js']
	},
	output: {
    	filename: filename('js'),
    	path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
    	extensions: ['.js', '.json', '.css', '.jpg'],
    	alias: {
    		'@css': path.resolve(__dirname, 'src/css/'),
    		'@js': path.resolve(__dirname, 'src/js/'),
    		'@img': path.resolve(__dirname, 'src/img/'),
    	}
    },
    optimization: optimization(),
    plugins: [
    new HTMLWebpackPlugin({
    	template: './intelligent.html',
    	minify: {
    		collapseWhitespace: isProd
    	}
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
    {
    	from: path.resolve(__dirname, 'src/'),
    	to: path.resolve(__dirname, 'dist')
    }
    ]),
    new MiniCssExtractPlugin({
    	filename: filename('css')
    })
    ],
    module: {
    	rules: [
    	{
    		test:/\.css$/,
    		use: cssLoaders()
    	},
    	{
    		test:/\.scss$/,
    		use: cssLoaders('scss-loader')
    	},
    	{
    		test:/\.(jpg|svg|png|gif|webp)$/,
    		use: ['file-loader']
    	},
    	{ 	
    		test: /\.js$/, 
    		exclude: /node_modules/, 
    		loader: {
    			loader:'babel-loader',
    			options: {
    				presets: [
    					'@babel/preset-env'
    				],
    				plugins: [
    					'@babel/plugin-proposal-class-properties'
    				]
    			} 
    		}
    	}

    	]
    }
};