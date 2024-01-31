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

    // delete method
    // remove the item at a specific index
    my_delete(index) {
        delete this.data[index]
        --this.length
        // after deleting, update the index values after the current index
        // could loop through the remaining elements to decrease their index
        // console.log(this.length)
        console.log("In loop")
        // current index = index + 1
        for (let i = index+1; index < this.length; index++){
            console.log(`Index: ${index}`)
            console.log(`${this.data[i]}`)
        }
        console.log(this.data[2])
        
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
console.log(array1);
array1.my_delete(1);
console.log(array1)