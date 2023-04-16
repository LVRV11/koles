import React from 'react';
import Painting from './components/Painting';
import Product from './Product.json';

function App() {
	return <div>
		<Painting 
		title={Product[0].title}
		price={Product[0].price}
		description={Product[0].description}
		category={Product[0].category}
		image={Product[0].image}
		rating={Product[0].rating.rate}
		/>

		<Painting 
		title={Product[1].title}
		price={Product[1].price}
		description={Product[1].description}
		category={Product[1].category}
		image={Product[1].image}
		rating={Product[1].rating.rate}
		/>

		<Painting 
		title={Product[2].title}
		price={Product[2].price}
		description={Product[2].description}
		category={Product[2].category}
		image={Product[2].image}
		rating={Product[2].rating.rate}
		/>
	</div>;

	
}

export default App