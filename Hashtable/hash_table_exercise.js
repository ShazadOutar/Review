class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // the _ is to say this is a private method and shouldn't be access outside of the class
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key, value) {
        // In the set function, input the key and value
        // Pass the key through the hash function console.log(this._hash(key))
        // Store the key, value pair at the index the hash returns
        let index = this._hash(key)
        // console.log(index)
        // add the pair at the index value
        // Check if the index is empty first
        if (!this.data[index]) {
            // this.data[index] = [key, value] This doesn't work cause it just replaces the first index
            this.data[index] = [] // Initalize the new array/bucket
            this.data[index].push([key, value])
        } else {
            // if the index is already storing something, add this new data to the end
            this.data[index].push([key, value])
        }
    }
    get(key) {
        // Using the input key, pass it through the index function 
        // then look through the data index for the input key
        let index = this._hash(key)
        let bucket = this.data[index]
        console.log(`bucket at index is: ${bucket}`);
        // check if the bucket is empty
        if (!bucket) {
            return undefined
        }
        else {
            // Loop through the bucket keys to find the one that matches the input key
            for (let i = 0; i < bucket.length; i++) {
                // If the keys match, return that pair
                if (bucket[i][0] === key) {
                    return bucket[i][1]
                }
            }
        }
    }
    keys() {
        // returns all the keys in the Hash Table
        let used_keys = []
        // Loop through each index of the table 
        // Then print any content at each index
        for (let index = 0; index < this.data.length; index++) {
            // console.log(this.data[index]);
            let bucket = this.data[index]
            if (!bucket) {
                // Skip the empty buckets
            } else {
                // Loop through the bucket contents
                for (let i = 0; i < bucket.length; i++) {
                    // console.log(bucket[i][0])
                    used_keys.push(bucket[i][0])
                }
            }
        }
        return used_keys
    }
}

const myHashTable = new HashTable(3);
myHashTable.set('grapes', 10000)
myHashTable.set('oranges', 45)
myHashTable.set('apples', 9)
// console.log(myHashTable.data);   
console.log(myHashTable.get('grapes'))
console.log(myHashTable.get('apples'))
console.log(myHashTable.get('oranges'));
console.log(myHashTable.keys());