export class customColl extends Map {
    filter(fn, thisArg) {
		if (thisArg) fn = fn.bind(thisArg);
		const res = new customColl();

		for (const [key, val] of this) if (fn(val, key, this)) res.set(key, val);
		return res;
	}

	map(fn, thisArg) {
		if (thisArg) fn = fn.bind(thisArg);
		const arr = [];
		
		for (const [key, val] of this) arr.push(fn(val, key, this));
		return arr;
	}
}