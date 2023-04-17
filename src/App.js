import React from 'react';
// import Painting from './components/Painting';
import Products from './Product.json';
import PaintingList from './components/PaintingList';
import Section from './components/Section';

function App() {
	return (
		<div>
			{/* <PaintingList items={Products} /> */}
			<Section title="Top Nedeli">
				<PaintingList items={Products}/>
			</ Section>

			<Section  title="best">
				<PaintingList items={Products}/>
			</Section>
		</ div>
		);
	}



export default App