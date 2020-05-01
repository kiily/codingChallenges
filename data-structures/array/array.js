class CustomArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
    
	get(index) {
		return  this.data[index];
	}
    
	push(item) {
		// Length always represents the end of our data
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}
    
	pop() {
		const lastItem = this.data[this.length -1];
		delete this.data[this.length -1];
		this.length--;
		return lastItem;
	}
    
	/**
     * Operations that run shift are O(n)  
     */
	shiftItems(index) {
		for(let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i+1];
		}
		// Need to treat the last item
		delete this.data[this.length - 1];
	}
    
	_delete(index) {
		const item = this.data[index];
		this.shiftItems();
		this.length--;
		return item;
	}
}

const newArray = new CustomArray();
newArray.push('hi');
newArray.push('hi');
console.log(newArray.get(0));