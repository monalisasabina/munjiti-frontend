import { useNavigate } from "react-router-dom"
import "./ErrorPage.css"

function ErrorPage(){

    const navigate = useNavigate();

    function handleGoHome(){
        navigate('/')
    }

    return(
        <div className="error_cont">
             
             <h1 className="error_title">404</h1>
             <div className="error_emoji">😵</div>
             <h2 className="error_warning">PAGE NOT FOUND</h2>
             <button className="error_button" onClick={handleGoHome} >Go Back Homepage</button>
        </div>
          
        
    )
}

export default ErrorPage