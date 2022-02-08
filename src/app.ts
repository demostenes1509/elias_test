export const getMinimumChange = (coins: Array<number>): number => {

	const sorted: Array<number> = coins.sort(function (a, b) {
		return a - b;
	});

	let value: number = 0
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] > value + 1) return value + 1
		value += sorted[i]
	}

	return value + 1
}

export const getSortedSquareArray = (arr: Array<number>): Array<number> => {
	return arr.map(a => a * a).sort((a, b) => { return a - b; })
}
