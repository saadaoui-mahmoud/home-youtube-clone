import { FaYoutube } from 'react-icons/fa';


function NavbarLeft(){
    return(
        <div style={{display:"flex"}}>
            <FaYoutube style={{color:"red", fontSize:40}}/>
            <h3 style={{marginTop:3}}>Youtube<sup style={{fontSize:15}}>TN</sup></h3>

        </div>

    )
}
export default NavbarLeft;