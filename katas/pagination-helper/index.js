class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex > this.pageCount() - 1) {
      return -1;
    }

    const start = pageIndex * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const items = this.collection.slice(start, end);
    const count = items.length;

    return count;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex > this.itemCount() - 1) {
      return -1;
    }

    const pageIndex = Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;

    return pageIndex;
  }
}

module.exports = PaginationHelper;
