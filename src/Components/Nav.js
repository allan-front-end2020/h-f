import './Nav.css'

const Nav = () => {
  return (
   <nav className='nav'>
     <div className='nav_left'>Loja</div>
     <div className='nav_middle'>
       <div className='input_wrapper'>
         <input type='text'/>
         <i className='fas fa search'/>
       </div>
     </div>
     <div className='nav_rigth'>
       <div className='cart_icon'>
         <i className='fa fa-shopping-cart' aria-hidden='true' />
       </div>
     </div>
   </nav>
  )
}

export default Nav
