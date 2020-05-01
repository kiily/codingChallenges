class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		// This is normally very fast so we do not consider it O(n)
		for (let i =0; i< key.length; i++) {
			hash = (hash + key.CharCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
    
	/**
     * O(1) if not collisions but can be a problem in limited memory
     * and can actually become O(n).
     */
	get(key) {
		const address = this._address(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (const item of currentBucket) {
				if (item[0] === key) {
					return item[1];
				}
			}
		}
		return undefined;
	}
    
	set(key, value) {
		const address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		} 
		this.data[address].push([key, value]);
	}
    
	/**
     * Iterate over all the keys in the hash table
     */
	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
console.log('myHashTable', myHashTable);