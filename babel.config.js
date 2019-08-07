const presets = [
    [
      "@babel/env",
      {
        targets: {
            "browsers": ["last 2 versions", "ie >= 10"]
        },
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };