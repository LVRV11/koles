import PropTypes from 'prop-types';

export default function Painting({  title, price, description, category, rating, image}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} width="120" />
            <p>{price}</p>
            <p>описание {description} товара</p>
            <p>{category}</p>
            <p>{rating}</p>
            <p>Доступность: {rating < 10 ? 'заканчивается' : 'есть в наличии'}</p>
            <button tupe="button">Добавить в корзину</button>
        </div>
    )
}

Painting.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}