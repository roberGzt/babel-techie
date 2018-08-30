module.exports = function (api) {
    api.cache(true);
    const plugins = ["@babel/plugin-transform-block-scoping"];
  
    return {
      plugins
    };
  }