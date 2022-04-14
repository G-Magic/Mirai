const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('» ❕ Lỗi rồi « ') + data);
			break;
		case "error":
			console.log(chalk.red('» ❕ Lỗi rồi « ') + data);
			break;
		default:
			console.log(chalk.magenta(`» ${option} « `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.hex("#99FF66")('[ MODE ] - ') + data);
			break;
		case "error":
			console.log(chalk.hex("#FF0000")('[ MODE ] - ') + data);
			break;
		default:
			console.log(chalk.hex("#99FFFF")(`[ MODE ] - `) + data);
			break;
	}
}
