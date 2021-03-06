import'./ProductsCard.css';
import CartContext from '../context/cart/CartContext';



const ProductCard = ({product}) =>{
    const{addToCart =userCallback}
   
    
    return (
    <div className="ProductCard_wrapper">
        <div>
            <img className="ProductCard_img" src={product.img} alt=""/>
            <h4>{product.name}</h4>
            <div className="ProductCard_price" >
              <h5>{product.price}</h5> 
            
              <button className='ProductCard_button'>
                 Adicione a sacola
              </button>

            </div>
        </div>

    </div>
    );
};

export default ProductCard;