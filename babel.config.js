module.exports = function(api) {
  api.cache(true);
  const plugins = ["@babel/plugin-transform-block-scoping"];
  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: 'usage',
        debug: true
        
      }
    ]
  ];

  return {
    plugins,
    presets
  };
};
