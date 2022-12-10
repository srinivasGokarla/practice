const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function (head) {
     let current = head;
    let turn = 0;
    if(current.data < current.next.data) {
        turn = 1;
      
    } else {
        turn = 2;
    }
        while(current.next ) {
            if(turn == 1 && current.data < current.next.data) {
                current = current.next;
                turn = 2
            } else if(turn == 2 && current.data > current.next.data) {
                current = current.next;
                turn = 1
            } else {
                return  false
            
                 
            
            }
        }
         return true;


};


