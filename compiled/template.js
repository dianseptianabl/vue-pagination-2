"use strict";

module.exports = function () {
  return function (h) {

    var items = [];

    this.pages.map(function (page) {
      items.push(h(
        "li",
        { "class": "c-pagination__item VuePagination__pagination-item page-item " },
        [h(
          "a",
          { "class": "c-pagination__link page-link " + this.activeClass(page), attrs: { href: "javascript:void(0);"
            },
            on: {
              "click": this.setPage.bind(this, page)
            }
          },
          [page]
        )]
      ));
    }.bind(this));

    return h(
      "div",
      { "class": "VuePagination" },
      [h(
        "ul",
        {
          directives: [{
            name: "show",
            value: this.totalPages > 1
          }],

          "class": "c-pagination VuePagination__pagination" },
        [h(
          "li",
          { "class": "c-pagination__item VuePagination__pagination-item page-item VuePagination__pagination-item-prev-chunk " + this.allowedChunkClass(-1) },
          [h(
            "a",
            { "class": "c-pagination__btn page-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.setChunk.bind(this, -1)
              }
            },
            ["<<"]
          )]
        ), h(
          "li",
          { "class": "c-pagination__item VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page " + this.allowedPageClass(this.page - 1) },
          [h(
            "a",
            { "class": "c-pagination__btn page-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.prev.bind(this)
              }
            },
            [h("span", { "class": "c-icon c-icon--arrow-backward" })]
          )]
        ), items, h(
          "li",
          { "class": "c-pagination__item VuePagination__pagination-item page-item VuePagination__pagination-item-next-page " + this.allowedPageClass(this.page + 1) },
          [h(
            "a",
            { "class": "c-pagination__btn page-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.next.bind(this)
              }
            },
            [h("span", { "class": "c-icon c-icon--arrow-forward" })]
          )]
        ), h(
          "li",
          { "class": "c-pagination__item VuePagination__pagination-item page-item VuePagination__pagination-item-next-chunk " + this.allowedChunkClass(1) },
          [h(
            "a",
            { "class": "c-pagination__btn page-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.setChunk.bind(this, 1)
              }
            },
            [">>"]
          )]
        )]
      ), h(
        "p",
        {
          directives: [{
            name: "show",
            value: parseInt(this.records)
          }],

          "class": "VuePagination__count" },
        [this.count]
      )]
    );
  };
};
