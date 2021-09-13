import NavBar from './NavBar.js';
import NavbarLeft from './NavbarLeft.js';
import NavbarRight from './NavbarRight';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-2" style={{marginTop:8}}>  
               <NavbarLeft />
            </div> 
            <div className="col-9" style={{marginTop:10}}>  
                <NavBar />
            </div> 
            <div className="col-1">  
                <NavbarRight />
            </div>    
                
               

            
        </div> 
      </div>
  
    );
  }
  
  export default Header;