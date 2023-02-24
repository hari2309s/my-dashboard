const { dependencies } = require('./package.json');

module.exports = {
  name: 'dashboard',
  remotes: {
    notes: 'notes@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
      eager: true,
    },
  },
};
