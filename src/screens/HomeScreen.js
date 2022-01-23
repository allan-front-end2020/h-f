import products from '../data';
import './HomeScreen.css';
import ProductCard from '../Components/ProductsCard';

const HomeScreen = () => {
  return (
    <div className='products_wrapper'>
        {products.map((product)=>(
        <ProductCard key={product.id} product={product} />
        ))}
   </div>
  )
}

 export default HomeScreen;
