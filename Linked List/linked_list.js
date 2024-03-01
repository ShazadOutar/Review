// to create a linked list of 10->5->16
// let myLinkedList = {
//     // head is an object containing a value and next which is a reference to the next object
//     head: {
//         value: 10,
//         // next is a object containing a value and a reference to the next object
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class myNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        // When creating the linked list, the head is the only value
        // this.head = {
        //     value: value,
        //     // head will point to null
        //     next: null,
        // }
        this.head = new myNode(value);
        // at the start, the head is also the tail
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // Add in the given value to the end of the linked list
        // let node = {
        //     value: value,
        //     next: null,
        // }
        // set the next value of the tail to be the new node instead of null
        let node = new myNode(value);
        this.tail.next = node;
        // make the new node pointing to null the tail
        this.tail = node;

        // increment the length
        ++this.length;
        return this;
    }

    prepend(value) {
        // Add a value to the front of the linked list
        // let newHead = {
        //     value: value,
        //     // next: this.head,
        //     next: null,
        // };
        let newHead = new myNode(value);
        newHead.next = this.head;
        this.head = newHead;

        // increment the length
        ++this.length;
        return this;
    }

    insert(index, value) {
        // check for 0 because we are using index - 1 so we won't be able to access the prvious nodes to the head
        // handle adding to index 0 the same as replacing the head
        if (index === 0) {
            this.prepend(value);
        } else if (index >= this.length) {
            // If the input index is larger than or equal to the length of the linked list, just append the value to the linked list
            console.log("larger than index");
            this.append(value);
        } else {
            // create the new node to insert
            let newNode = new myNode(value);
            let previousNode = this.head;
            let nextNode;
            // loop through the nodes starting from the head until right before the index value
            for (let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;
            }
            // store the node at the index value as nextNode
            // console.log(previousNode.value);
            nextNode = previousNode.next;
            // console.log(nextNode.value);

            // The new node will go between previous and next 
            // so previous will point to the new node
            // and the nex node will point to the nextNode
            previousNode.next = newNode;
            newNode.next = nextNode;

            // increment the length
            ++this.length;
            return this;
        }
    }

    show_values() {
        // iterate through the linked list and give the values for each node
        let currentNode = this.head;
        let values = [];
        // for (let i = 0; i < this.length; i++){
        // Keep looping until we reach the null value after the tail
        while (currentNode !== null) {
            // every loop move to the next item
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
        return values;
    }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(7);
// console.log(myLinkedList);
// console.log(myLinkedList.head);
// console.log(myLinkedList.tail);
// console.log(myLinkedList.length);
myLinkedList.prepend(1);
myLinkedList.append("hello");
myLinkedList.show_values();

myLinkedList.insert(0, 'a');
myLinkedList.show_values();
myLinkedList.insert(2, 'b');
myLinkedList.show_values();
myLinkedList.insert(myLinkedList.length, 'c');
myLinkedList.show_values();
myLinkedList.insert(myLinkedList.length + 1, 'd');
// myLinkedList.prepend('a');
// console.log(myLinkedList);
myLinkedList.show_values();


// // Creating references and pointers
// let obj1 = {a: true};
// // obj2 = obj1 makes obj2 a reference to object 1
// // obj2 and obj1 both point to the same location in memory
// let obj2 = obj1;

// console.log('1', obj1);
// console.log('2', obj2);

// // modifying object 1, also affects the objects that reference it
// obj1.a = 5
// console.log('1', obj1);
// console.log('2', obj2);

// // Same goes true for modifying object 2, object 1 also gets affected
// obj2.a = false
// console.log('1', obj1);
// console.log('2', obj2);

// // either object can be deleted and still have the other access it
// delete obj1.a;
// console.log('1', obj1.a);
// console.log('2', obj2.a);