function Enum(keys, hasSum) {
	var acc = hasSum ? { ALL: Math.pow(2, keys.length) - 1 } : {};

	return Object.freeze(keys.reduce(function(acc, key, index) {
		acc[key] = Math.pow(2, index);
		return acc;
	}, acc));
}

function Mirror(list) {
	var keys = Array.isArray(list) ? list : Object.keys(list);

	return Object.freeze(keys.reduce(function(acc, key) {
		acc[key] = key;
		return acc;
	}, {}));
}

exports.Enum = Enum;
exports.Mirror = Mirror;
