/** @type {import('knip').KnipConfig} */
const config = {
	workspaces: {
		'apps/app': {
			entry: ['index.ts'],
		},
		// 'packages/shared': {
		// 	entry: ['src/index.ts'],
		// },
		'packages/shared': {
			entry: ['build/index.d.ts'],
			ignore: ['src/**/*', 'build/helpers/**/*.d.ts'],
		},
	},
}

export default config
