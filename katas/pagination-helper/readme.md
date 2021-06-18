# [PaginationHelper](https://www.codewars.com/kata/515bb423de843ea99400000a)

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

```javascript
const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

helper.pageCount(); // 2
helper.itemCount(); // 6

helper.pageItemCount(0); // 4
helper.pageItemCount(1); // 2
helper.pageItemCount(2); // -1

helper.pageIndex(5); // 1
helper.pageIndex(2); // 0
helper.pageIndex(20); // -1
helper.pageIndex(-10); // -1
```
