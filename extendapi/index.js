var promiseHelpers = require ('../index');

function PromiseLogic(promiseLib) {
	promiseLib.prototype.or = promiseHelpers.or;
	promiseLib.prototype.and = promiseHelpers.and;
	return promiseLib;
}

module.exports = PromiseLogic;