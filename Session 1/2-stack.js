class Stack {
    list = []

    push(itemList) {

        if(typeof(itemList) != 'object'){
            this.list.push(itemList)
        }
        else{
            for(let i=0; i<itemList.length; i++){
                if(typeof(itemList[i]) === 'string' ){
                    this.list.push(itemList[i])
                }
                
            }
        }
           
    }

    check() {
        console.log(this.list)
    }

    pop(){
        if(this.list[0] != null){
            this.list.pop()
        }
        else{
            console.log("Stack is currently empty")
        }
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”