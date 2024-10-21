'use client';

import {
	addItemToCart,
	removeItemFromCart,
	InitialState,
	inCartValue,
} from '@/redux/features/cartSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemsList() {
	const { cartItems, total } = useSelector((state: InitialState) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(inCartValue());
	}, [cartItems]);
	return (
		<div className="container mx-auto">
			<div className="flex gap-4 mt-2">
				<span>Ukupno:</span>
				<span>
					{total} <sup>RSD</sup>
				</span>
			</div>

			<div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
				{cartItems.map((item) => {
					return (
						<div
							key={item.id}
							className="flex flex-col justify-center cursor-pointer "
						>
							<img src={item.imageUrl} />

							<div className="my-2">
								<span className="text-lg font-bold">{item.name}</span>
							</div>

							<div>
								<span className="text-2xl">
									{item.price} <sup>RSD</sup>
								</span>
							</div>

							<div className="flex items-center justify-center gap-4 px-2">
								<button
									className="text-3xl"
									onClick={() => dispatch(removeItemFromCart(item))}
								>
									-
								</button>
								<span className="text-xl">{item.numInCart}</span>
								<button
									className="text-3xl"
									onClick={() => dispatch(addItemToCart(item))}
								>
									+
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
