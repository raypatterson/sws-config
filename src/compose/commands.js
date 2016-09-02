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
	config: {
		alias: 'c',
		name: 'config',
		description: 'Specify config file name.',
		default: 'fmw.config.js'
	}
};

const argv = require('yargs')
	.usage('Usage: $ <command> [options]')
	.command('fmw', 'Run Full Metal Webpack 🍹')
	.example('$ fmw --debug --production --config fmw.config.file.js', 'Run in debug mode, package for production, specify config.')
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
	 * `--config fmw.config.file.js` or `-c fmw.config.file.js`
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
