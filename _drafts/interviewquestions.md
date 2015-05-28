---
title: Interviews: Reversing a String
layout: post
category: blog
---

Let's have a look at a very simple example question and get some results in python.

<!--postbreak-->

### Question:

*Reverse a string*

#### Solutions 

To start out, I went with a needlessly complicated, naive approach:

{% highlight python %}
def reverseString(input):
	outList = [0]*len(input)
	for i, char in enumerate(input):
		outList[len(input)-i-1] = char
	return ''.join(outList)
{% endhighlight %}

This is nice, I suppose, if you're looking to show off your ability to iterate lists, but otherwise it's just a bulky mess.

Fortunately, Python's list implements __reversed__() so we can use the builtin reversed call:

{% highlight python %}
	''.join(reversed(list(input)))
{% endhighlight %}

This is a nice almost functional design. One obvious problem still remains: we're still looking at the string post conversion to list. Handling the string as a list is nice when you're doing more fiddly things as strings are immutable. However, for simple things like this, we can use Python's builtin slicing:

{% highlight python %}
	input[::-1]
{% endhighlight %}

The slice syntax is: [start:end:step]. Negative steps indicate descending ordering. Python is rather nice when it comes to defaults. If the step is negative, the default start is the end of the list/array/string/... whereas if the step is positive, the default is at the start.

#### Results

Just to make sure the slicing is the best from a speed standpoint as well as clean syntactically, I ran all three through this function:

{% highlight python %}
def testTiming(func, string):
    initT = time.process_time()
    for _ in range(10000):
        func(string)
    return time.process_time() - initT
{% endhighlight %}

Using slicing improved by a factor of about 5 over the join approach and a factor of about 14 over the iteration approach.