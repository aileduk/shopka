export function getFilteredProducts(filter, products, sort) {
  return products.filter((item) => {
    let filterPassed = !filter || item.category === filter;
    
    let sortPassed =
      sort === "default" ? products :
        sort === "0 to ∞" ? products.sort((a, b) => Number(a.price - b.price)) :
          sort === "∞ to 0" ? products.sort((a, b) => Number(b.price - a.price)) :
            sort === "0 to 5" ? products.sort((a, b) => Number(a.rating.rate - b.rating.rate)) :
              sort === "5 to 0" ? products.sort((a, b) => Number(b.rating.rate - a.rating.rate)) :
                console.log("Error");

    return filterPassed && sortPassed

  })
}