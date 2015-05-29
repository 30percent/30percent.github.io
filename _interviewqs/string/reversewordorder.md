---
layout: interviewpost
title: Interviews&#58; Reverse Word Order
category: string
excerpt: We've reversed a whole string, can we no just swap the words?
index: 1
gistlink: https://gist.github.com/30percent/632652d7abdbf675ff5a
---

### Question

*Rather than reverse the string, reverse the word order*

### Solution

For this question, let's make it simple and steal one of the solutions to the question on reversing a string. We'll need to make an alteration to allow for list explosion based on whitespace rather than individual characters:

{% highlight python %}
def revWordList(input):
    return ' '.join(reversed(input.split(' ')))
{% endhighlight %}

This function explodes (or "splits") the string based on a space, calls the list reverse, then implodes (or "joins") the list into a string by reintroducing the space.