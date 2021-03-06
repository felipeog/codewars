# [Weird prime generator](https://www.codewars.com/kata/562b384167350ac93b00010c)

Consider the sequence `a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2`:

`7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73...`.

Let us take the differences between successive elements of the sequence and get a second sequence `g: 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...`.

For the sake of uniformity of the lengths of sequences **we add** a `1` at the head of g:

`g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...`

Removing the 1s gives a third sequence: `p: 5, 3, 11, 3, 23, 3...` where you can see prime numbers.

**Task:**

Write functions:

1. an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)

1. gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)

1. countOnes(n) with parameter n: returns the number of 1 in the series gn(n) (don't forget to add a `1` at the head) # (tested)

1. p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the sequence gn (not tested)

1. maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)

1. anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)

1. anOverAverage(n) with parameter n: returns as an _integer_ the average of anOver(n) # (tested)
