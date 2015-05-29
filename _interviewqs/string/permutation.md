---
title: Interviews&#58; Testing Permutation
layout: interviewpost
category: String
excerpt: What can you do if you want to test string permutation?
index: 2
gistlink: https://gist.github.com/30percent/582b6943dad32bc5f83b
---

### Question

*Given two strings, determine if they are permutations of each other*

### Solution

To tackle this one, we're going to use some form of map. Using collections' "defaultdict" allows us to save a bit of floor space by having a default on appending a new key. This leads us to the following:

{% highlight python %}
def charCount(inStr):
    charDict = defaultdict(int)
    for char in inStr:
        charDict[char] += 1
    return charDict
{% endhighlight %}

This function runs through a string character by character and creates a dictionary maintaining the number of each character within the string. Python's default initilization for int is 0, which allows us to do the increment safely for newly created keys. 

Once we've got this map, we need to test it compared to another string, we'll do this cleanly using a simple function:

{% highlight python %}
def isPermutation(leftStr, rightStr):
    return charCount(leftStr) == charCount(rightStr)
{% endhighlight %}

What this leaves us with is a very quick, clean way of testing strings at the top level:

{% highlight python %}
print(isPermutation("aabbccdd","abcdabcd"))
{% endhighlight %}