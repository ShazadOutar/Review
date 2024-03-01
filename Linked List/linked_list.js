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

class LinkedList {
    constructor(value){
        // When creating the linked list, the head is the only value
        this.head = {
            value: value,
            // head will point to null
            next: null,
        }
        // at the start, the head is also the tail
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // Add in the given value to the end of the linked list
        let node = {
            value: value,
            next: null,
        }
        this.tail.next = node;
        this.tail = node;
        // console.log(`tail is ${this.tail.value}`);
        // delete this.tail.next;
        // this.tail.next = node;
        // node.next = null;

        // increase the length 
        ++this.length;
        return this
    }

}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);
console.log(myLinkedList.head);
console.log(myLinkedList.length);
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