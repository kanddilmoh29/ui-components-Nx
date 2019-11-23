module.exports = {
  name: 'structured-content',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/structured-content',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
