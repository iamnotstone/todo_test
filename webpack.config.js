module.exports = {
    module : {
        loaders: [ { 
                test   : /\.js$/,
                loader : 'babel-loader',
		query: {
          		presets: ['es2015', 'react','stage-2']
        	}
            }
        ]
    },
    watch : false
};
