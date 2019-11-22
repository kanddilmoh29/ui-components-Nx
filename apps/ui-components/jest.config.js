module.exports = {
  name: 'ui-components',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
