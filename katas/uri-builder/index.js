class UriBuilder {
  constructor(url) {
    const [root, search] = url ? url.split("?") : [];
    const params =
      search &&
      search.split("&").reduce((acc, param) => {
        const [key, value] = param.split("=");

        return {
          ...acc,
          [key]: value,
        };
      }, {});

    this.root = root || "";
    this.params = params || {};
  }

  build() {
    const search = Object.entries(this.params)
      .map(([key, value]) => {
        return `${key}=${encodeURI(value)}`;
      })
      .join("&");

    return `${this.root}${search ? `?${search}` : ""}`;
  }
}

module.exports = UriBuilder;
