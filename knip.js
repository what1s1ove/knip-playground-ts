/** @type {import('knip').KnipConfig} */
const config = {
	workspaces: {
		'apps/app': {
			entry: ['index.ts'],
		},
		'packages/shared': {
			entry: ['src/index.ts'],
			includeEntryExports: true,
		},
	},
}

export default config
