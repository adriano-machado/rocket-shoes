import React, { useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';
import { ProductList } from './styles';
import Loading from '../../components/Loading';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';
import * as ProductsActions from '../../store/modules/products/actions';

export default function Home() {
    const products = useSelector(state => state.products);
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            dispatch(ProductsActions.storeProducts(data));
        }
        loadProducts();
    }, [dispatch]);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        {product.loading ? (
                            <Loading> </Loading>
                        ) : (
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" />
                                {amount[product.id] || 0}
                            </div>
                        )}
                        <span>ADD TO CART</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}
