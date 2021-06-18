const { getLoopTestTitle } = require("../../utils/test");
const PaginationHelper = require("./index");

describe("Static tests", () => {
  describe("24 items, 10 items per page", () => {
    const collection = Array(24).fill(0);
    const helper = new PaginationHelper(collection, 10);

    describe("pageCount", () => {
      const input = undefined;
      const output = 3;
      const testTitle = getLoopTestTitle(1, input, output);

      it(testTitle, () => {
        expect(helper.pageCount(input)).toEqual(output);
      });
    });

    describe("itemCount", () => {
      const input = undefined;
      const output = 24;
      const testTitle = getLoopTestTitle(1, input, output);

      it(testTitle, () => {
        expect(helper.itemCount(input)).toEqual(output);
      });
    });

    describe("pageItemCount", () => {
      const tests = [
        { input: 1, output: 10 },
        { input: 2, output: 4 },
        { input: 3, output: -1 },
      ];

      tests.forEach(({ input, output }, index) => {
        const testTitle = getLoopTestTitle(index + 1, input, output);

        it(testTitle, () => {
          expect(helper.pageItemCount(input)).toEqual(output);
        });
      });
    });

    describe("pageIndex", () => {
      const tests = [
        { input: 40, output: -1 },
        { input: 22, output: 2 },
        { input: 3, output: 0 },
        { input: 0, output: 0 },
        { input: -1, output: -1 },
        { input: -23, output: -1 },
        { input: -15, output: -1 },
      ];

      tests.forEach(({ input, output }, index) => {
        const testTitle = getLoopTestTitle(index + 1, input, output);

        it(testTitle, () => {
          expect(helper.pageIndex(input)).toEqual(output);
        });
      });
    });
  });

  describe("0 items, 10 items per page", () => {
    const helper = new PaginationHelper([], 10);
    const input = 0;
    const output = -1;
    const testTitle = getLoopTestTitle(1, input, output);

    it(testTitle, () => {
      expect(helper.pageIndex(input)).toEqual(output);
    });
  });
});
