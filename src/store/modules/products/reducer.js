import produce from 'immer';

export default function products(state = [], action) {
    switch (action.type) {
        case '@products/SAVE_PRODUCTS':
            return action.products;

        case '@products/SET_LOADING': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].loading = Number(action.loading);
                }
            });
        }

        default:
            return state;
    }
}
