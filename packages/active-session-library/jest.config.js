/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	watchAll: false,

	watch: false,

	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// An object that configures minimum threshold enforcement for coverage results
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},

	maxWorkers: '50%',

	silent: true,

	testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],

	// An array of file extensions your modules use
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

	// A list of paths to directories that Jest should use to search for files in
	roots: ['<rootDir>'],

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',

	// The regexp pattern or array of patterns that Jest uses to detect test files
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};
