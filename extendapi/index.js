var promiseHelpers = require ('../index');

function PromiseLogic(promiseLib) {
	promiseLib.or = promiseHelpers.or;
	promiseLib.and = promiseHelpers.and;
	return promiseLib;
}

module.exports = PromiseLogic;