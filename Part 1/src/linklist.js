class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    add(val) {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.length++;
    }
  
    sort() {
      this.head = this.mergeSort(this.head);
    }
  
    mergeSort(head) {
      if (!head || !head.next) {
        return head;
      }
  
      // Divide the list into two halves
      let slow = head;
      let fast = head.next;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      let mid = slow.next;
      slow.next = null;
  
      // Sort each half recursively
      let left = this.mergeSort(head);
      let right = this.mergeSort(mid);
  
      // Merge the two sorted halves
      let dummy = new Node(0);
      let current = dummy;
      while (left && right) {
        if (left.val < right.val) {
          current.next = left;
          left = left.next;
        } else {
          current.next = right;
          right = right.next;
        }
        current = current.next;
      }
      current.next = left || right;
  
      return dummy.next;
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
  
  const list = new LinkedList();
  
  // Add random data to the list
  for (let i = 0; i < 50000; i++) {
    const randomNum = Math.floor(Math.random() * 200001) - 100000;
    list.add(randomNum);
  }
  
  console.log("Unsorted Linked List:");
  list.printList();
  
  list.sort();
  
  console.log("Sorted Linked List:");
  list.printList();
  