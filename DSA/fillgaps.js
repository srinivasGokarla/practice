const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
     let current = head
    
   while(current.next) {
       let temp = current.next;
       let expData = current.data+1;
       
       if(expData < temp.data) {
           let newNode = new LinkedListNode
           current.next = newNode;
           newNode.next = temp
       }
       current = current.next
   }
  // return head
};
