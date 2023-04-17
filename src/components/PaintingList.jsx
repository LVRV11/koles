import Painting from "./Painting";
import PropTypes from "prop-types"

function PaintingList ({items}){
return (
<ul>
{items.map(item => (
    <li key={item.id}>
    <Painting 
		title={item.title}
		price={item.price}
		description={item.description}
		category={item.category}
		image={item.image}
		rating={item.rating.count}
		/>
    </li>
))}
</ul>
);
}

PaintingList.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}

export default PaintingList;
