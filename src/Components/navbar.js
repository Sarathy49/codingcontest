
import { Link } from 'react-router-dom';
function Nav(){

    return (
      <div class="nav">
       
          <nav className="navbar">
            <a  class="split"><Link to={"Home"}>Home</Link></a>
            <a  rel="noopener noreferer"><Link to={"PostPage"}>Add Orders</Link></a>
            {/* <a ><Link to={"GetPage"}>Previous Orders</Link></a>
            <a><Link to={"UpdatePage"}>Update Orders</Link></a>
            <a><Link to={"Deletepage"}>Delete Orders</Link></a> */}
            
          </nav>
        
       
        
      </div>
    );
  }
export default Nav;