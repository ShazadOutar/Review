class MyArray {
    constructor() {
        // set an intial length of 0 and no data
        this.length = 0;
        this.data = {};
    }

    // access element in the array
    get(index) {
        return this.data[index];
    }

    // push method
    // add the input item to the end of the current array
    push(item) {
        this.data[this.length] = item;
        // update the new length
        ++this.length;
        return this.length;
    }

    // pop method
    // remove the last item from the array
    pop() {
        // last element is at index of length minus 1
        const last_item = this.data[this.length-1];
        // using the delete keyword
        delete this.data[this.length-1];
        // decrement the length 
        --this.length;
        return last_item;
    }

    // delete method idea 1
    // remove the item at a specific index
    // my_delete(index) {
    //     console.log(`Trying to delete index ${index} with value of ${this.get(index)}`)
    //     delete this.data[index]
    //     --this.length
    //     // after deleting, update the index values after the current index
    //     // could loop through the remaining elements to decrease their index
    //     // console.log(this.length)
    //     // let new_index = index+1
    //     console.log("In loop")
    //     // current index = index + 1
    //     for (let i = index+1; i <= this.length; i++){
    //         console.log(`Index: ${i}: ${this.data[i]}`)
    //         // console.log(`${this.data[i]}`)
    //     }
    // }

    // delete method idea 2
    my_delete(index) {
	// replace each index with its next element
	for (let i = index; i < this.length; i++){
	    this.data[i] = this.data[i+1]
	}
	// then pop the last value
	this.pop();
    }

    // It's the same idea as what I came up with but his avoids setting an undefined value on the last index
    his_delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        // Replace each element with its next element
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i];
        }
        // delete the last element and decrement
        delete this.data[this.length - 1];
        this.length-- 
    }
}

// create an array using MyArray
const array1 = new MyArray();
console.log(array1);
console.log(array1.get(0));
array1.push(5);
array1.push("hi");
console.log(array1.get(1));
console.log(array1);
array1.pop();
console.log(array1);
array1.push("Big item");
array1.push(39);
array1.push(49);
array1.push(89);
console.log(`Before delete`);
console.log(array1)
array1.my_delete(0);
console.log(array1);
