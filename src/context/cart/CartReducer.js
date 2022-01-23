import { SHOW_HiDE_CART , REMOVE_ITEM ,ADD_TO_CART} from '../Types.js';


const CartReducer = (state, action) => {
    switch (action.type) {
        case SHOW_HiDE_CART: {
            return{
            ...state,
            showCart:! state.showCart
            }
        }
        case ADD_TO_CART:{
            return{
                ...state,
                cartItems:[...state. cartItem, action.payload]
            }
        }
            
        case REMOVE_ITEM: {
            return{
                ...state,
                cartItem: state.cartItem.filter(item => item.id !==action.payload)
            }
        }
        default:
        return state
    }


}


export default CartReducer 