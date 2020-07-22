import axios from "axios";
import history from '../history'
import { toast } from 'react-toastify';
import { userService } from "../services/authentication.service";
import {LOGIN_SUCCESS,LOGIN_FAILED,LOGIN_USER_INFO,LOGOUT_SUCCESS} from "./types";

export const register=(regObj) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("ressssssssssss", regObj)
        return axios.post("/v1/api/company/signup" , regObj).then((res) => {
            console.log("register response ", res);
            toast.success("Register Successfully")
            history.push('/login');
            window.location.reload();
            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err.response.data.message)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 




export const login = (loginData) => {
    return (dispatch) => {
        console.log("Logini data", loginData)
        return axios.post("/v1/api/company/login", loginData).then((res) => {
            console.log("loginData response ??????????", res.data);
            userService.setToken(res.data);
            dispatch({ type:LOGIN_SUCCESS,  payload:res.data })
            console.log("Login success....", res.data)
            if(res.data.isSuperAdmin){
                history.push('/dashboard');
                window.location.reload();
            }else{
                history.push('/list-stock');
                window.location.reload();
            }
        }).catch((err)=>{
            console.log("Err is login failed", err)
            history.push('/login');
            dispatch({ type:LOGIN_FAILED })
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
        });
    }
}



export const logout = () => {
    return (dispatch) => {
        userService.logout();
        history.push('/login');
        dispatch({
            type:LOGOUT_SUCCESS
        })
        dispatch({
            type:LOGIN_USER_INFO,
            payload:{}
        })
    }
}


export const fetchUserData=(data) => dispatch =>{
    return new Promise((resolve, reject) => {
        var user = localStorage.getItem('loggedIn_email')
        var login_user_type = localStorage.getItem('login_as')

        return axios.get("/v1/api/company/me/" + user).then((res) => {
            console.log("fetchUserData response ", res);
            dispatch({ type:LOGIN_USER_INFO,   payload:res.data    })
            resolve(res)
        }).catch((err)=>{
            console.log("ERR is", err)
            reject(err)
        });
        
    });
} 


