import axios from "axios"

export function fetchImages(){
    return function(dispatch){
        dispatch({type:"FETCH_IMAGES_INIT"});

        axios.get("http://demo0813639.mockable.io/getPanos")
        .then((response)=>{
            dispatch({type:"FETCH_IMAGES_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
            dispatch({type:"FETCH_IMAGES_REJECTED",payload: err })
        })
    }
}