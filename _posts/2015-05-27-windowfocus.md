---
title: Window Focus
layout: post
projectlink: https://github.com/30percent/windowfocus
---

WindowFocus extends [OpenGazer(http://www.inference.phy.cam.ac.uk/opengazer/)], an open source gaze tracking software that uses any standard webcam, to change window focus based on where the user is looking.

<!--postbreak-->

### Description

Using Python's socket library to capture the results from a running [OpenGazer(http://www.inference.phy.cam.ac.uk/opengazer/)] process, the software in real time changes between windows based on where the user is looking. To do this, a couple of addition libraries are needed:  
* wnck
* Qt through PySide

OpenGazer's use of a standard webcam and local sockets allows anyone with a UNIX operating system to write programs that are linked directly to a user's gaze.

### Details

Qt is used to allow the user to select which windows are to be separated into the screen's sectors for focusing through a simple GUI.

Wnck is used for all window handling from discovery and resizing to refocusing. To discover available windows:

{% highlight python %}
screen.get_windows()
for w in window_list:
	names.append(w.get_name())

def getWindow(title):
    screen = wnck.screen_get_default()
    screen.force_update()
    window_list = screen.get_windows()
    for w in window_list:
        if w.get_name() == title:
            return w
{% endhighlight %}

Once the windows have been selected, we split the screen into the sectors then place each window into one of the sectors:

{% highlight python %}
SPLIT = 2
sto = screensection.createSections(screen, SPLIT)
for i, window in enumerate(selected_list):
    sect = sto[i]
    window.set_geometry(wnck.WINDOW_GRAVITY_NORTHWEST, flags, sect[0], sect[1], sect[2], sect[3])
    window.activate(int(time.time()))
{% endhighlight %}