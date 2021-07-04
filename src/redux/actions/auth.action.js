
import firebase from "firebase/app";
import { Profiler } from "react";
import auth from "../../firebase.js";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOAD_PROFILE, LOG_OUT} from "../actionTypes.js";

export const login = () => async dispatch => {

    try {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken

        const profile = {
            name:res.additionalUserInfo.profile.name,
            photo:res.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem('yt-access-token',accessToken)
        sessionStorage.setItem('yt-user',JSON.stringify(profile))



        dispatch({
            type:LOGIN_REQUEST,
        })

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken,
        })

        dispatch({
            type:LOAD_PROFILE,
            payload:profile,
        })

    } catch(error){
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message,
        })
       
    }
        
    


}

export const logout = () => async dispatch => {
    await auth.signOut()
    dispatch({
        type:LOG_OUT
    })
    sessionStorage.removeItem("yt-access-token")
    sessionStorage.removeItem("yt-user")
}
