# [Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)

[Digital root](https://en.wikipedia.org/wiki/Digital_root) is the recursive sum of all the digits in a number.

Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

## Examples

```javascript
digital_root(16); // 7
digital_root(942); // 6
digital_root(132189); // 6
digital_root(493193); // 2
```
