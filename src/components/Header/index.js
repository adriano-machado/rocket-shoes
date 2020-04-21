import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
    const cartSize = useSelector(state => state.cart.length);
    return (
        <Container>
            <Link to="/">
                <img alt="RocketShoes" src={logo} />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>
                    <span>
                        {cartSize === 1
                            ? `${cartSize} product`
                            : `${cartSize} products`}
                    </span>
                </div>
                <MdShoppingCart size={36} color="#FFF" />
                <span>{cartSize}</span>
            </Cart>
        </Container>
    );
}
