module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	rootDir: '.',
	testMatch: ['<rootDir>/test/**/*.test.ts'],
	moduleFileExtensions: ['ts', 'js'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts', '!src/logger.ts']
};
