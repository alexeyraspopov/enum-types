function Mask(keys, hasSum) {
	var acc = hasSum ? Object.create(null, { ALL: { value: Math.pow(2, keys.length) - 1 } }) : Object.create(null);

	return Object.freeze(keys.reduce(function(acc, key, index) {
		acc[key] = Math.pow(2, index);
		return acc;
	}, acc));
}

function Enum(object) {
	var keys = Object.keys(object),
		values = keys.reduce(function(array, key, index) {
			array.push(object[key] == null ? (index > 0 ? array[index - 1] + 1 : 0) : object[key]);
            return array;
		}, []);

	return Object.freeze(keys.reduce(function(acc, key, index) {
		var value = values[index];

		acc[acc[key] = value] = key;

		return acc;
	}, Object.create(null)));
}

function Mirror(list) {
	var keys = Array.isArray(list) ? list : Object.keys(list);

	return Object.freeze(keys.reduce(function(acc, key) {
		acc[key] = key;
		return acc;
	}, Object.create(null)));
}

exports.Mask = Mask;
exports.Enum = Enum;
exports.Mirror = Mirror;
