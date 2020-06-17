module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '\\.test\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
