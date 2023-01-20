import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark m-3'>
        <a className="navbar-brand ms-2 btn btn-secondary shadow" href="/">
            Exercise - IronBNB
        </a>
        
        {/*<NavLink className='btn' to="/" >Home</NavLink>*/}
        <NavLink className='btn' to="/apartments" >Apartments</NavLink>
        <NavLink className='btn' to="/apartment/create" >Create a New Apartment</NavLink>
    </nav>
  )
}

export default Navbar;