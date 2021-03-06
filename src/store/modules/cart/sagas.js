import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
// import history from '../../../services/history';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { setProductLoading } from '../products/actions';

import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
    // método para acessa informação do reducer
    yield put(setProductLoading(id, true));
    const productExists = yield select(state =>
        state.cart.find(p => id === p.id)
    );

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora do estoque');
        yield put(setProductLoading(id, false));

        return;
    }
    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        // chamada api com saga
        const response = yield call(api.get, `/products/${id}`);
        // DISPARANDO ACTION PRO REDUCER

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));

        // history.push('/cart');
    }

    yield put(setProductLoading(id, false));
}

function* updateAmount({ amount, id }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora do estoque');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
