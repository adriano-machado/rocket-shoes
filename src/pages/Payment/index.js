import React, { useState } from 'react';
import 'react-credit-cards/es/styles-compiled.css';

import Card from 'react-credit-cards';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from './utils';

import { Form, Container } from './styles';

function Payment() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focused, setFocused] = useState(null);
    const [, setEmail] = useState(null);

    function handleInputFocus({ target }) {
        if (target.id === 'securityCode') {
            setFocused('cvc');
        } else if (target.id === 'cardNumber') {
            setFocused('number');
        } else if (target.id === 'cardholderName') {
            setFocused('name');
        } else if (target.id === 'expiry') {
            setFocused('expiry');
        } else {
            setFocused(target.name);
        }
    }

    function handleInputChange({ target }) {
        if (target.id === 'cardNumber') {
            target.value = formatCreditCardNumber(target.value);
            setNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
            setExpiry(target.value);
        } else if (target.id === 'securityCode') {
            target.value = formatCVC(target.value);
            setCvc(target.value);
        } else if (target.id === 'cardholderName') {
            setName(target.value);
        } else if (target.id === 'email') {
            setEmail(target.value);
        }
    }

    // return (<MP></MP>)

    return (
        <Container key="Payment">
            <Card
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
            />
            <Form onSubmit={() => {}}>
                <input
                    type="text"
                    id="cardNumber"
                    data-checkout="cardNumber"
                    placeholder="Card number"
                    pattern="[\d| ]{16,22}"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="text"
                    id="cardholderName"
                    data-checkout="cardholderName"
                    placeholder="Holder name"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="tel"
                    name="expiry"
                    placeholder="Expiration date"
                    pattern="\d\d/\d\d"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="text"
                    id="securityCode"
                    placeholder="Security code"
                    pattern="\d{3,4}"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                <button type="button">Confirm Payment</button>
            </Form>
        </Container>
    );
}

export default Payment;
