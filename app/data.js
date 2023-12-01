export const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=20&pageNo=1")
    const data = await response.json()
    return data;
}

export const fetchSingleProd = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}?limit=20&pageNo=1`)
    const data = await response.json()
    return data;
}

export const fetchProductsByCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=20&pageNo=1`)
    const data = await response.json()
    return data;
}
