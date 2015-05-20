---
title: In-Process Multithreading
layout: post
projectlink: https://github.com/30percent/InProcessMultiThreading
---

This was a class project designed to implement multithreading at the user-level. Each thread within a process shares that singles process' resources. The inclusion of mutexes and signaling allows for base level inter-thread communication (more complex communication is done in process' shared memory).

<!--postbreak-->

###USAGE 
* make clean : ensure you have called before any make as library compilation updates rather than resets.
* make : generates a library called libmythreads.a
* to use the library, use gcc with -o flag and include libmythreads.a at end of command.
  * example: gcc -o program programcode.c libmythreads.a

###DESIGN 
The contents are a "process threading" library. It is intended to allow
multitasking by sharing a single cpu thread. It uses a Round Robin approach. This is
done by using a 4 Circular Queues to store all threads:

1. "readyList" - this queue stores all active threads, those that can be run
2. "exitList" - this queue stores all threads that have returned from their function or called threadExit.
3. "lockWaiting" - this queue stores all threads that are waiting on a mutex lock
4. "conditionWaiting" - this queue stores all threads that are waiting on a signal attached to a specific mutual expression (a tlock in our case)

There is no priority or preference, except that child threads always get a chance to
run immediately after being called. 

The threads are handled by storing execution information in ucontext, then swapping
between them any time they voluntarily yield, forced to yield by a lock, or forced to
yield through some intentionally preemptive code in the calling program if following
"interruptsAreDisabled" to ensure it doesn't interrupt the library code (by using
threadYield on some sort of timer typically).

The code is hopefully well described in the actual files using a set comment scheme.