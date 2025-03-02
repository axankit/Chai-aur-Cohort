/* 
! Throttling in JavaScript

? Throttling is a technique used to limit the execution of a function to once in a given time interval, even if the event that triggers the function keeps occurring.

Why Use Throttling?
Throttling is useful when:

* You want to control how often a function is executed.
! A function is triggered repeatedly in quick succession, and you want to execute it at fixed intervals rather than every time the event occurs.
For example:

Scroll events (Trigger a function at most once every X milliseconds, even if the user keeps scrolling.)
Resize events (Limit how often the layout updates while resizing.)
Button clicks (Prevent multiple clicks within a short duration.)
*/