import { Link } from "react-router-dom";

function Navbar() {
  return (
        <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
            <div class="container p-1">
                <Link class="navbar" to="/">
                    <img src="src/assets/logo.svg" alt="Logo Image" style={{width: "23%"}}/>
                </Link>

                <div class="navbar-collapse">
                    <form class="d-flex" role="search">
                    <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link  class="nav-link" to="/about" style={{marginLeft: "30px"}}> About </Link  >
                            </li>
                            <li class="nav-item">
                                <Link  class="nav-link" to="/product" style={{marginLeft: "30px"}}> Products </Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/pricing" style={{marginLeft: "30px"}}> Pricing </Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/support" style={{marginLeft: "30px"}}> Support </Link >
                            </li>    
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
