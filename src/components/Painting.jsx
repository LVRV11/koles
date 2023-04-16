

export default function Painting({  title, price, description, category, rating, image}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} width="120" />
            <p>{price}</p>
            <p>описание {description} товара</p>
            <p>{category}</p>
            <p>{rating}</p>
            <button tupe="button">Добавить в корзину</button>
        </div>
    )
}