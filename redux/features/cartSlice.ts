import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartItems } from '@/CartItems';

export interface CartItem {
	id: number;
	name: string;
	price: number;
	discount: number | null;
	imageUrl: string;
	numInCart: number;
}

export type InitialState = {
	cart: {
		cartItems: CartItem[];
		amount: 0;
		total: 0;
	};
};

const initialState = {
	cartItems: cartItems,
	amount: 0,
	total: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			if (!cartItem) return;
			cartItem.numInCart++;
		},
		removeItemFromCart: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			if (!cartItem) return;
			if (cartItem.numInCart === 0) return;
			cartItem.numInCart--;
		},
		inCartCounter: (state) => {
			state.amount = state.cartItems.reduce(
				(total, item) => total + item.numInCart,
				0
			);
		},
		inCartValue: (state) => {
			state.total = state.cartItems.reduce(
				(total, item) => total + item.numInCart * item.price,
				0
			);
		},
	},
});

export const { removeItemFromCart, addItemToCart, inCartCounter, inCartValue } =
	cartSlice.actions;

export default cartSlice.reducer;
