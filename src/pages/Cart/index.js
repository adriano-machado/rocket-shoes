import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    MdAddCircleOutline,
    MdRemoveCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

export default function Cart() {
    const dispatch = useDispatch();

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }
    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.amount * product.price),
        }))
    );

    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce((sumTotal, product) => {
                return sumTotal + product.price * product.amount;
            }, 0)
        )
    );

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUCT</th>
                        <th>AMOUNT</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <div>
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormatted}</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            CartActions.removeFromCart(
                                                product.id
                                            )
                                        )
                                    }
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>
            <footer>
                <Link to="/payment">
                    <button type="button">PROCEED TO CHECKOUT</button>
                </Link>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
