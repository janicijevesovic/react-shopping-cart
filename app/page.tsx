'use client';

import './globals.css';
import Header from './components/header';
import ItemsList from './components/items-list';

export default function Home() {
	return (
		<main>
			<Header />
			<ItemsList />
		</main>
	);
}
