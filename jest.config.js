module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|js|tsx)",
    "**/?(*.)+(spec|test).+(ts|js|tsx)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
  automock: false,
  setupFilesAfterEnv: ["./jest.setup.ts"]
};
