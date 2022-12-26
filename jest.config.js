/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
    "\\.css\\?module$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/__mocks__/svgrMock.js",
    "\\.(jpg|jpeg|png|gif)": "<rootDir>/__mocks__/fileMock.js",
  },
  moduleDirectories: ["assets/js", "node_modules"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};
