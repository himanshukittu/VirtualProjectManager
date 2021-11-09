const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    //Override config here. 
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
    })(config, env);
    return config;
};