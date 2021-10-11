import axios from 'axios'
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {showitems,loading} from '../redux/ActionCreate/action'
export default function FetchApi() {
    const dispatch = useDispatch()
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            dispatch(loading(false))
        dispatch({type:"SHOW_ITEMS",payload:response.data})
        })
        .catch(err=>console.log(err))
    }
    useEffect(() => {
       fetchData()
    }, [])
    return (
        <div>
            
        </div>
    )
}
