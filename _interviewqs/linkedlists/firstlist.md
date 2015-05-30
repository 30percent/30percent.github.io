---
title: Interviews&#58; Removing Duplicates
layout: interviewpost
category: Linked List
excerpt: How do you go about removing duplicate entries from a linked list?
index: 0
gistlink: https://gist.github.com/30percent/d85c67c51d8e93cf5da2
---

### Question:

How do you go about removing duplicate entries from a linked list?

### Solution:

So, to start out, I had to go and write a basic Linked List libary with a List class and a Node class. You can find them [here](https://gist.github.com/30percent/d6679ccecf7a04f9e67e). This is mostly just the bare essentials: pointer to head node, add node by node or by contents, and getters/setters for each variable in class.

For this, the Linked List's head node is always an empty node. This allows for the List to always have an element with a pointer and makes tests cleaner.

Now, on to my solution. I started by creating a function that searches forward from a node and compares against each further node.

{% highlight python %}
def removeDuplicates(myNode):
    tempNode = myNode
    while tempNode.getNext() != None:
        toRemove = tempNode.getNext()
        if(toRemove.getContents() == myNode.getContents()):
            tempNode.setNext(toRemove.getNext())
            toRemove = None
        else:
            tempNode = toRemove
{% endhighlight %}

Rather than look over entire list from beginning each time, I assume this function will be run on each element in sequence. This allows for significantly less searching as we know no previous element can match the current element as it has already been tested. To ensure the function is run on each element, I pass the function to this:

{% highlight python %}
def funcOnAllNodes(myList, function):
    curNode = myList.getHeadNext()
    function(curNode)
    while curNode.getNext() != None:
        curNode = curNode.getNext()
        function(curNode)
{% endhighlight %}

This allows for a more generalized function that I can use later for other problems.


### Issues

Unfortunately, this design means the <code>removeDuplicates</code> relies on previous nodes already being checked (it doesn't run backwards). As such, it fails the contract implied by its name, but provides slightly more efficiency once assumed to be a helper function.