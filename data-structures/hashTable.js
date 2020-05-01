class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		// This is normally very fast so we do not consider it O(n)
		for (let i =0; i< key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
    
	/**
     * O(1) if not collisions but can be a problem in limited memory
     * and can actually become O(n).
     */
	get(key) {
		const address = this._hash(key);
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
		return this.data;
	}
    
	/**
     * Iterate over all the keys in the hash table; this is costly for big hash
     * tables; for ... in is similar in concept to this
     */
	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}

	keysNoCollision() {
		if (!this.data.length) {
			return undefined;
		}
		let result = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i] && this.data[i].length) {
				if (this.data[i].length > 1) {
					for (let j =0; j < this.data[i].length; j++) {
						result.push(this.data[i][j][0]);
					}
				} else {
					result.push(this.data[i][0][0]);
				}
			}
		}
		return result;
	}
}

const myHashTable = new HashTable(2);
myHashTable.set('totot', 1000);
myHashTable.get('totot');
console.log('myHashTable', myHashTable.get('totot'));
console.log('myHashTable', myHashTable.keysNoCollision());