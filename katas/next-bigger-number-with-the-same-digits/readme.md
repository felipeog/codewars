# [Next bigger number with the same digits](https://www.codewars.com/kata/55983863da40caa2c900004e)

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

```javascript
nextBigger(12); // 21
nextBigger(513); // 531
nextBigger(2017); // 2071
```

If the digits can't be rearranged to form a bigger number, return `-1` (or `nil` in Swift):

```javascript
nextBigger(9); // -1
nextBigger(111); // -1
nextBigger(531); // -1
```
