import axios from "axios";
import { DATA_LIST } from "./types";


export const getDataList=(obj) => dispatch =>{
    return new Promise((resolve, reject) => {
      console.log("getDataList", obj)
        return  axios.get(`/api/getlist`).then((res)=>{
		      console.log("getDataList response" , res)
		      dispatch({ type:DATA_LIST ,  payload:res.data })
		  }).catch(err => {
		      console.log("Error" , err)
		  });   
    });
} 