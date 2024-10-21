'use client';

import { InitialState } from '@/redux/features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { inCartCounter, inCartValue } from '@/redux/features/cartSlice';
import { useEffect } from 'react';

export default function Header() {
	const { amount, cartItems, total } = useSelector(
		(store: InitialState) => store.cart
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(inCartCounter());
	}, [cartItems]);

	return (
		<div className="sticky top-0 z-10 flex justify-between p-4 border-2 border-solid bg-zinc-100">
			<span>Logo Holder</span>
			<span>Cart ({amount})</span>
		</div>
	);
}
