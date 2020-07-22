import axios from "axios";
import history from '../history'
import { toast } from 'react-toastify';
import { PRODUCT_LIST, PRODUCT_DETAIL,PRODUCT_TOTAL, PENDING_PRODUCT, COMPANY_LIST } from "../Actions/types";


export const addSingleProduct=(productObj) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("addSingleProduct", productObj)
        return axios.post("/v1/api/stocks/addSingleProduct" , productObj).then((res) => {
            console.log("addSingleProduct resssssss ", res);
            toast.success(res.data.message)
            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 


export const imageUpload=(formData, config) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("imageUpload")
        return axios.post("/v1/api/stocks/upload" , formData, config).then((res) => {
            console.log("imageUpload resssssss ", res);
            //toast.success(res.data.message)
            resolve(res)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status !== 200){
                toast.error("Error while upload image")
            }
            reject(false)
        });
    });
} 




export const getStockList=(filterObj) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("getStockList")
        return axios.put("/v1/api/stocks/getProductList", filterObj).then((res) => {
            console.log("getStockList resssssss ", res.data.data);
            dispatch({ type:PRODUCT_LIST,  payload:res.data.data.stocklist   })
            dispatch({ type:PRODUCT_TOTAL,  payload:res.data.data.count   })

            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 




export const getProductDeatail=(productId) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("getProductDeatail", productId)
        return axios.get("/v1/api/stocks/getProductDetail/" + productId).then((res) => {
            dispatch({ type:PRODUCT_DETAIL,  payload:res.data.data   })
            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 




export const sendProductInquiry=(productId) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("sendProductInquiry", productId)
        return axios.get("/v1/api/stocks/sendInquiry/" + productId).then((res) => {
            toast.success(res.data.message)
            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 


export const getAllPendingProducts=(filterObj) => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("getAllPendingProducts", filterObj)
        return axios.put("/v1/api/stocks/getPendingProducts", filterObj).then((res) => {
            //toast.success(res.data.message)
            dispatch({ type:PENDING_PRODUCT,  payload:res.data.data   })
            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 


export const getAllCompanies=() => dispatch =>{
    return new Promise((resolve, reject) => {
        console.log("getAllPendingProducts")
        return axios.get("/v1/api/stocks/getAllCompanies").then((res) => {
            dispatch({ type:COMPANY_LIST,  payload:res.data.data   })
            resolve(true)
        }).catch((err)=>{
            console.log("ERrr", err)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 



