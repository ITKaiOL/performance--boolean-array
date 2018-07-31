# Performance Test: Boolean Array in JavaScript

This project test the performance of implementing array of boolean values in JavaScript.

Two methods are tested:
1. Array of boolean value
2. Array of 32-bit bit vector

For each case, two implementations are tested:
1. Values in array is not initialized, undefined value means false.
2. Values in array is initialized as false at the beginning.

# Why such test?

As I have a need in implementing array of boolean values in JavaScript. 
My first thought is to make good use of bitwise operators on bit vectors to improve the performance.
As JavaScript represents all number as a floating point value, some argue that bitwise operation is not very useful.
However on the other hand, modern JavaScript engine is improving and may have optimized array of integers for better performance. 

There has been a lot of debate about it, so why not test it myself?
