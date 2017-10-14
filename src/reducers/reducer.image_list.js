const default_state ={
    fetching : false,
    fetched  : false,
    error    : null,
    image_list   : []
};


function imageListReducer(state = default_state, action){
    switch(action.type){


        case "FETCH_IMAGES_INIT":{
            return Object.assign(
                {},
                state,
                {
                    fetching : true
                }
            );
        }
        
        case "FETCH_IMAGES_REJECTED" :{
            return Object.assign(
                {},
                state,
                {
                    fetching : false,
                    error : action.payload
                }
            );
        }
        
        case "FETCH_IMAGES_FULFILLED" :{
            return Object.assign(
                {},
                state,
                {
                    fetching : false,
                    fetched  : true,
                    image_list   : action.payload 
                }
            );
        }
        
        default :
            return state;
    }
}

export default imageListReducer