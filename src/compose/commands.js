'use strict';

const OPTIONS = {
	debug: {
		alias: 'd',
		name: 'debug',
		description: 'Enable debug mode.',
		default: false
	},
	production: {
		alias: 'p',
		name: 'production',
		description: 'Package for production.',
		default: false
	},
	clean: {
		alias: 'c',
		name: 'clean',
		description: 'Cleans "dist" directory.',
		default: false
	},
	config: {
		alias: 'rc',
		name: 'config',
		description: 'Specify config file name.',
		default: 'fmw.config.js'
	}
};

const argv = require('yargs')
	.usage('Usage: $ <command> [options]')
	.command('fmw', 'Run Full Metal Webpack 🍹')
	.example('$ fmw --debug --production --clean --config fmw.config.file.js', 'Run in debug mode, clean dist, package for production, specify config file.')
	/**
	 * `--debug` or `-d`
	 */
	.alias(OPTIONS.debug.alias, OPTIONS.debug.name)
	.boolean(OPTIONS.debug.alias)
	.default(OPTIONS.debug.alias, OPTIONS.debug.default)
	.describe(OPTIONS.debug.alias, OPTIONS.debug.description)
	/**
	 * `--production` or `-p`
	 */
	.alias(OPTIONS.production.alias, OPTIONS.production.name)
	.boolean(OPTIONS.production.alias)
	.default(OPTIONS.production.alias, OPTIONS.production.default)
	.describe(OPTIONS.production.alias, OPTIONS.production.description)
	/**
	 * `--clean` or `-c`
	 */
	.alias(OPTIONS.clean.alias, OPTIONS.clean.name)
	.boolean(OPTIONS.clean.alias)
	.default(OPTIONS.clean.name, OPTIONS.clean.default)
	.describe(OPTIONS.clean.alias, OPTIONS.clean.description)
	/**
	 * `--config fmw.config.file.js` or `-rc fmw.config.file.js`
	 */
	.alias(OPTIONS.config.alias, OPTIONS.config.name)
	.string(OPTIONS.config.alias)
	.default(OPTIONS.config.name, OPTIONS.config.default)
	.describe(OPTIONS.config.alias, OPTIONS.config.description)
	.help('h')
	.alias('h', 'help')
	.epilog('<software_version>')
	.epilog('<software_license>')
	.argv;

module.exports = argv;
