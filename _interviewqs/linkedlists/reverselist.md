---
title: Interviews&#58; Reverse a Linked List
layout: interviewpost
category: Linked List
excerpt: What's to be done to reverse a Linked List?
index: 1
gistlink: https://gist.github.com/30percent/d85c67c51d8e93cf5da2
---

### Question

What do we need to do to reverse a Linked List?

### Solution

For this, as before with duplication removal, I used the simple Linked List class implemented [here](https://gist.github.com/30percent/d6679ccecf7a04f9e67e. The method in this implementation is to simply prepend the "next" node until there are no more nodes to prepend. There are two mild tricky portions:

* Ensure the old start points to nothing/null/None.
* Ensure you keep track of the prepended node's old "next" before any changes

{% highlight python %}
def reverseList(myList):
    curNode = myList.getHeadNext().getNext()
    myList.getHeadNext().setNext(None)
    while True:
        if curNode == None:
            break
        nextCur = curNode.getNext()
        myList.prependNode(curNode)
        curNode = nextCur
{% endhighlight %}

