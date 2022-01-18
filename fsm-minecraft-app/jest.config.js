module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(scss|sass|css|less)$': '<rootDir>/src/testUtils/cssMock.js',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/testUtils/fileMock.js'
  }
};
