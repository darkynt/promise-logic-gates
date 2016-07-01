function isPromise(promiseLikeObject) {
	return (typeof promiseLikeObject.then === 'function')
}

function or(iterable) {
	var rejected = [];
	// Resolves with the value of the first promise that resolves
	// Only rejects if all of the supplied promises reject
	return new Promise(resolve, reject) {
		for (let i = 0; i < iterable.length; i += 1) {
			let curr = iterable[0];
			if (isPromise(cur)) {
				cur.then((val) => {
					return resolve(val);
				}, (err) => {
					rejected.push(err);
				});
			}

			if (rejected.length === iterable.length) {
				return reject(rejected);
			}
		}
		return reject();
	}
}

function and(iterable) {
	var resolved = [];
	// Resolves with an array containing the resolve
	// value of all supplied promises (in order)
	// If any of the supplied promises reject, immediately rejects
	return new Promise(resolve, reject) {
		for (let i = 0; i < iterable.length; i += 1) {
			let cur = iterable[i];
			if (isPromise(cur)) {
				cur.then((val) => {
					resolved.push(val);
				}, (err) => {
					return reject(err);
				});
			}

			if(resolved.length === iterable.length) {
				return resolve(resolved);
			}
		}
		return reject();
	}
}

module.exports = {
	or: or,
	and: and
};