import React from 'react';
import "./_login.scss";
import { GoogleLogin } from 'react-google-login';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect} from 'react';
import { login } from '../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom';

const Login = () => {
 
    const dispatch = useDispatch();
    const handleClick =() =>{
        dispatch(login())
    }
    const token = useSelector(state => state.auth.accessToken)
    const history = useHistory()

    useEffect(() => {
        if(token){
            history.push("/")
        }
    }, [token,history])


    return (
        <div className = "login">
            <div className="login__page">
             <img  src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""></img>
             <button onClick={handleClick}> 
              Login with Google
             </button>    
            
             <p>youtube clone application</p>
             </div>
        </div>
    )
}

export default Login
