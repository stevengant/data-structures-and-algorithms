'use strict';

const { HashTable } = require('../sorting/hashtable/hashtable')

const tree_intersection = ( treeOne, treeTwo ) => {

	const table = new HashTable(1024);

	let arr1 = treeOne.preOrder();
	let arr2 = treeTwo.preOrder();
	arr1.forEach(e => table.set(e, true));

	let valArr = [];

	for( let i = 0; i < arr2.length; i++ ) {
		let value = arr2[i];
		if(table.has(value)) {
			valArr.push(value);

		} else {
			table.set(value, true);

		}
	}

	return valArr;
};

module.exports = {tree_intersection};

		