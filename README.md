# Performance Test: Boolean Array in JavaScript

This project test the performance of implementing array of boolean values in JavaScript.

Two methods are tested:
1. Array of boolean value
2. Array of 32-bit bit vector

For each of the methods, two cases are tested:
1. Values are not initialized, `undefined` value means `false`.
2. Values are pre-filled with `false` at the beginning.

For all test, array bound is not checked.

# Why such test?

As I have a need in implementing array of boolean values in JavaScript. 
My first thought is to make good use of bitwise operators on bit vectors to improve the performance.
As JavaScript represents all number as a floating point value, some argue that bitwise operation is not very useful.
However on the other hand, modern JavaScript engine is improving and may have optimized array of integers for better performance. 

There has been a lot of debate about it, so why not test it myself?

# Test parameters
## Array size
Test is performed on different array size:
- Small set: 4096 values
- Medium set: 16384 values
- Large set: 65536 values

## Access rate
Test is performed on different number of accesses, proportional to the array size.
- Light access: number of access equals to the array size.
- Medium access: number of access equals to 4 times of the array size.
- Heavy access: number of access equals 16 times of the array size.

# Test result and observations (updated 2018-08-01)
The test is performed on Windows 10, on the following platforms:
- **NodeJS**: v8.11.3
- **Chrome**: v68.0.3440.84
- **Firefox**: v61.0.1
- **Edge**: v42.17134.1.0

## Results
It is found that result is more consistence if testing is done in multiple runs in the same script execution. 
Therefore testing is done twice in a row in each execution, and the second result is collected.

All timing measured in milliseconds.

| Small / Light        | Small / Medium | Small / Heavy | Medium / Light | Medium / Medium | Medium / Heavy | Large / Light | Large / Medium | Large / Heavy |
|----------------------|:--------------:|:-------------:|:--------------:|:---------------:|:--------------:|:-------------:|:--------------:|:-------------:|
| **NodeJS**           |                |               |                |                 |                |               |                |               |
| boolean              |       0.2      |      1.0      |       3.6      |       0.9       |       3.6      |      13.8     |       4.0      |      15.8     |
| boolean pre-filled   |       0.2      |      0.8      |       3.4      |       0.8       |       3.2      |      13.3     |       3.4      |      13.9     |
| bitvector            |       0.3      |      0.9      |       3.8      |       1.0       |       3.7      |      14.9     |       3.9      |      15.1     |
| bitvector pre-filled |       0.2      |      0.9      |       3.6      |       0.9       |       3.5      |      14.7     |       3.7      |      14.6     |
| **Chrome**           |                |               |                |                 |                |               |                |               |
| boolean              |       0.3      |      0.9      |       3.8      |       1.1       |       4.0      |      14.9     |      15.0      |      55.1     |
| boolean pre-filled   |       0.2      |      0.9      |       3.8      |       0.9       |       3.8      |      15.6     |       8.6      |      55.6     |
| bitvector            |       0.4      |      1.0      |       4.0      |       1.0       |       4.2      |      16.2     |       9.5      |      54.8     |
| bitvector pre-filled |       0.1      |      1.1      |       4.0      |       1.0       |       4.3      |      16.1     |      14.3      |      49.2     |
| **Firefox**          |                |               |                |                 |                |               |                |               |
| boolean              |       7.3      |      10.5     |      25.5      |       13.0      |      28.5      |      78.5     |      45.5      |     124.5     |
| boolean pre-filled   |       1.8      |      4.8      |      17.0      |       4.0       |      17.5      |      74.0     |      18.0      |      73.8     |
| bitvector            |       0.8      |      1.0      |       2.5      |       1.0       |       3.5      |      10.3     |       3.3      |      9.0      |
| bitvector pre-filled |       0.0      |      0.3      |       2.5      |       0.3       |       2.3      |      10.5     |       2.3      |      9.5      |
| **Edge**             |                |               |                |                 |                |               |                |               |
| boolean              |       0.5      |      1.6      |       4.9      |       2.1       |       6.5      |      19.7     |       8.9      |      31.3     |
| boolean pre-filled   |       0.2      |      1.0      |       4.2      |       1.0       |       4.2      |      17.2     |       4.3      |      21.0     |
| bitvector            |       0.3      |      1.0      |       3.9      |       0.9       |       3.7      |      14.3     |       3.9      |      14.5     |
| bitvector pre-filled |       0.2      |      0.9      |       3.8      |       0.9       |       3.5      |      14.1     |       3.7      |      14.5     |

# Observation
Note that due to security threats Spectre, the precision of `performance.now()` is currently reduced. The smaller the measurement the more inaccurate the result. Despite that, a few observations can be made from the test:

- In general bit vector is more effective. However note that the measurement did not account for the initialization cost.
- Firefox prefer prefilled array, using `undefined` value as `false` greatly impact the performance.

Conclusion: Use bitvector and pre-fill the array.
