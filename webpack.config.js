module.exports = {
    output:{
	filename:"app.bundle.js"
    },
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
