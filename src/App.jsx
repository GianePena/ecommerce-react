
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo"src="https://cdn-icons-png.freepik.com/256/5382/5382572.png?ga=GA1.2.223757486.1701650007&" alt="" /></a>
          <h2>Marca</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {<NavBar />}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <ItemListContainer greeting="Bienvenido a mi ecommerce"/>
      </div>
    </div>
  );
}

export default App;