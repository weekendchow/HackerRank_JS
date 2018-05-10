this.insert=function(head,data){
          //complete this method
        if(head == null){
            return new Node(data)
        }

        if(head.next == null){
            head.next = new Node(data)
        }else {
            this.insert(head.next,data)
        }
        return head
    };
