import mock from "../data/mocks";
import { filterProductsBy } from "./filterProductsBy";

describe("Product Filters", () => {

  describe("Text filter", () => {
    it("filters products by `text` filter correctly", async () => {
      expect(filterProductsBy(mock.products, { text: "lo" })).toEqual([
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
      ]);
    });

    it("should return all products when text is defined, but empty", async () => {
      expect(filterProductsBy(mock.products, { text: "" })).toEqual(
        mock.products
      );
    });

    it("should return product even the text filter is case sensitive", async () => {
      expect(filterProductsBy(mock.products, { text: "bErLiN" })).toEqual([
        mock.products[0],
      ]);
    });
  });

  describe("Min Rating filter", () => {
    it("filters products by `minRating` filter correctly", async () => {
      expect(filterProductsBy(mock.products, { minRating: 6 })).toEqual([
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
      ]);
    });

    it("should return all if minRating is less than 0", async () => {
      expect(filterProductsBy(mock.products, { minRating: -1 })).toEqual(
        mock.products
      );
    });

    it("should return empty array if minRating provided is greater than any product rating", async () => {
      expect(filterProductsBy(mock.products, { minRating: 100000 })).toEqual(
        []
      );
    });
  });

  describe("Order Alpha filter", () => {
    it("filters products by `orderAlpha` filter correctly", async () => {
      expect(filterProductsBy(mock.products, { orderAlpha: true })).toEqual([
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
        {
          id: "1001",
          name: "Berlin Guide",
          rating: 1,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1005",
          name: "Milano Guide",
          rating: 2,
        },
        {
          id: "1007",
          name: "Stockholm Guide",
          rating: 1,
        },
        {
          id: "1002",
          name: "Tokyo Guide",
          rating: 3,
        },
      ]);
    });

    it("should order all products alphabetically", async () => {
      expect(filterProductsBy(mock.products, { minRating: -1 })).toEqual(
        mock.products
      );
    });

    it("should return empty array if minRating provided is greater than any product rating", async () => {
      expect(filterProductsBy(mock.products, { minRating: 100000 })).toEqual(
        []
      );
    });
  });

  describe("Order Reverse Alpha filter", () => {
    it("filters products by `orderReverseAlpha` to filter correctly", async () => {
      expect(
        filterProductsBy(mock.products, { orderReverseAlpha: true })
      ).toEqual([
        {
          id: "1002",
          name: "Tokyo Guide",
          rating: 3,
        },
        {
          id: "1007",
          name: "Stockholm Guide",
          rating: 1,
        },
        {
          id: "1005",
          name: "Milano Guide",
          rating: 2,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1001",
          name: "Berlin Guide",
          rating: 1,
        },
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
      ]);
    });
  });

  describe("Multiple filters", () => {
    it("filter by text AND minRating", async () => {
      expect(
        filterProductsBy(mock.products, { minRating: 6, text: "Guide" })
      ).toEqual([
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
      ]);
    });

    it("filter by text AND minRating AND orderAlpha", async () => {
      expect(
        filterProductsBy(mock.products, {
          minRating: 6,
          text: "Guide",
          orderAlpha: true,
        })
      ).toEqual([
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
      ]);
    });

    it("filter by text AND minRating AND orderReverseAlpha", async () => {
      expect(
        filterProductsBy(mock.products, {
          minRating: 6,
          text: "Guide",
          orderReverseAlpha: true,
        })
      ).toEqual([
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
      ]);
    });

    it("filter by text AND orderAlpha", async () => {
      expect(
        filterProductsBy(mock.products, {
          text: "Guide",
          orderAlpha: true,
        })
      ).toEqual([
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
        {
          id: "1001",
          name: "Berlin Guide",
          rating: 1,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1005",
          name: "Milano Guide",
          rating: 2,
        },
        {
          id: "1007",
          name: "Stockholm Guide",
          rating: 1,
        },
        {
          id: "1002",
          name: "Tokyo Guide",
          rating: 3,
        },
      ]);
    });

    it("filter by minRating AND orderAlpha", async () => {
      expect(
        filterProductsBy(mock.products, {
          minRating: 1,
          orderAlpha: true,
        })
      ).toEqual([
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
        {
          id: "1001",
          name: "Berlin Guide",
          rating: 1,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1005",
          name: "Milano Guide",
          rating: 2,
        },
        {
          id: "1007",
          name: "Stockholm Guide",
          rating: 1,
        },
        {
          id: "1002",
          name: "Tokyo Guide",
          rating: 3,
        },
      ]);
    });

    it("filter by minRating AND orderReverseAlpha", async () => {
      expect(
        filterProductsBy(mock.products, {
          minRating: 5,
          orderReverseAlpha: true,
        })
      ).toEqual([
        {
          id: "1004",
          name: "Los Angeles Guide",
          rating: 9,
        },
        {
          id: "1006",
          name: "London Guide",
          rating: 7,
        },
        {
          id: "1003",
          name: "Lagos Guide",
          rating: 6,
        },
        {
          id: "1008",
          name: "Athens Guide",
          rating: 9,
        },
      ]);
    });

    it("if orderAlpha AND orderReverseAlpha are defined, return products with no sorting", async () => {
      expect(
        filterProductsBy(mock.products, {
          orderAlpha: true,
          orderReverseAlpha: true,
        })
      ).toEqual(mock.products);
    });
  });

  it("does not mutate passed data", async () => {
    //First filter by text
    expect(
      filterProductsBy(
        mock.products,
        { text: "london" }
      )
    ).toEqual([
      {
        id: "1006",
        name: "London Guide",
        rating: 7,
      },
    ]);

    //After filtering by Text
    //if passed data is not mutating, it should return the correct product filtered by the new filter provided
    //In case data is mutating, we would have mock.products only with London object inside and the following test would fail.
    expect(filterProductsBy(mock.products, { text: "berlin" })).toEqual([
      {
        id: "1001",
        name: "Berlin Guide",
        rating: 1,
      },
    ]);
  });

  it("no filter provided", async () => {
    expect(filterProductsBy(mock.products)).toEqual(mock.products);
  });
});
