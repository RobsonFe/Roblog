import {NavLink} from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-medium">
        Ro<span className="fw-bold">Blog</span>
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" >
                Home
            </NavLink>
            </li>  

            <li className="nav-item">
            <NavLink to="/login" className="nav-link" >
                Entrar
            </NavLink>
            </li> 

            <li className="nav-item">
            <NavLink to="/register" className="nav-link" >
                Cadastrar
            </NavLink>
            </li>   

            <li className="nav-item">
                <NavLink to="/about" className="nav-link" >
                    Sobre
                </NavLink>
            </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;