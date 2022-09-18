module.exports = {
	extends: ['next', 'turbo', 'prettier'],
	plugins: ['@typescript-eslint'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true,
			},
		],
	},
};
