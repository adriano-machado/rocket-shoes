export function storeProducts(products) {
    return {
        type: '@products/SAVE_PRODUCTS',
        products,
    };
}

export function setProductLoading(id, loading) {
    return {
        type: '@products/SET_LOADING',
        id,
        loading,
    };
}
