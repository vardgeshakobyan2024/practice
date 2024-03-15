import SizeItem from '../SizeItem/SizeItem';
import './cardProducts.css';

const CardProducts = ({images, id, description, article, price, size}) => {
    return (
        <div className="cardProducts">
            <div className="imgBlock">
                <img src={images} alt={`image${id}`}/>
            </div>
            <div className="infoBlock">
                <div className="infoHeading">
                    <h4>{description}</h4>
                    <span className='article'>Артикул{article}</span>
                </div>
                <div className="infoFooter">
                    <h4>{price} ₽</h4>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <div className="sizeBlock">
                    {
                        size?.map((el, idx) => {
                            return (
                                <SizeItem 
                                    key={idx}
                                    size={el}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CardProducts;