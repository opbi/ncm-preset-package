module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10.19',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    ['module-resolver', { root: ['./src'] }],
  ],
};
