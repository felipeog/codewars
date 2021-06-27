const UriBuilder = require("./index");

describe("Requirement tests", () => {
  const builder = new UriBuilder();

  it("UriBuilder must have build method", () => {
    expect(builder.build).toBeTruthy();
  });
});

describe("Static tests", () => {
  const rootUrl = "http://www.codewars.com";
  const builder = new UriBuilder(rootUrl);

  const testUrl = (url) => {
    const output = rootUrl + encodeURI(url);

    expect(builder.build()).toEqual(output);
  };

  it("Test 1: params.a = 1 should return http://www.codewars.com?a=1", () => {
    builder.params.a = 1;
    testUrl("?a=1");
  });

  it("Test 2: params.a = 2 should return http://www.codewars.com?a=2", () => {
    builder.params.a = 2;
    testUrl("?a=2");
  });

  it("Test 3: params.b = 1 should return http://www.codewars.com?a=2&b=1", () => {
    builder.params.b = 1;
    testUrl("?a=2&b=1");
  });

  it("Test 4: delete a from params should return http://www.codewars.com?b=1", () => {
    delete builder.params.a;
    testUrl("?b=1");
  });

  it('Test 5: params.b = "a b" should return http://www.codewars.com?b=a%20b', () => {
    builder.params.b = "a b";
    testUrl("?b=a b");
  });
});
