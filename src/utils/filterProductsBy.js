export const filterProductsBy = (products, filters) => {
  
  // Create new array based on the products data provided
  let filteredProducts = [...products];

 //Define sorting function
  const sortProducts = (current, next, order) => {
    if (order === "DESC")
      return current.name < next.name
        ? 1
        : current.name > next.name
        ? -1
        : 0;
    return current.name > next.name ? 1 : current.name < next.name ? -1 : 0;
  };

  // Apply filtering if filters object is provided
  if (filters) {
    
     // Filter by text
     if (filters.hasOwnProperty("text"))
       filteredProducts = filteredProducts.filter((product) =>
         product.name.toLowerCase().includes(filters.text.toLowerCase())
       );

     // Filter by minRating
     if (filters.hasOwnProperty("minRating"))
       filteredProducts = filteredProducts.filter(
         (product) => product.rating >= filters.minRating
       );

    // Apply orderAlpha OR orderReverseAlpha filter in case they are not equal
    if (
    !(filters.hasOwnProperty("orderAlpha") &&
      filters.hasOwnProperty("orderReverseAlpha") &&
      filters.orderAlpha === filters.orderReverseAlpha)
    ){
       //Order Alphabetically
       if (filters.hasOwnProperty("orderAlpha"))
         if (filters.orderAlpha)
           filteredProducts = filteredProducts.sort((current, next) =>
             sortProducts(current, next, "ASC")
           );

       //Reverse Order
       if (filters.hasOwnProperty("orderReverseAlpha"))
         if (filters.orderReverseAlpha)
           filteredProducts = filteredProducts.sort((current, next) =>
             sortProducts(current, next, "DESC")
           );
     }
  }
  return filteredProducts;
};
