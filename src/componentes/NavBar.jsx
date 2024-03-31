import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
export const NavBar = () => (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavLink to="" className="itemLogo">
        <img src="https://cdn-icons-png.freepik.com/256/5382/5382572.png?ga=GA1.2.223757486.1701650007&" alt="logo" />
      </NavLink>
      <NavLink to="/category/remeras" className="itemsLinks">Remeras</NavLink>
      <NavLink to="/category/pantalones" className="itemsLinks">Pantalones</NavLink>
      <NavLink to="/category/buzos"className="itemsLinks">Buzos</NavLink>
    <CartWidget />
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>



 
</>
);
