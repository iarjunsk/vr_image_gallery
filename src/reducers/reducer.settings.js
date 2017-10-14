const default_state = {
    imageID : "",
};

function settingsReducer(state = default_state, action){
    switch(action.type){
        case "SHOW_IMAGE": 
            return Object.assign(
                {},
                state,
                {
                    isShowing : true,
                    imageID   : action.payload.imageID
                }
            );
        
        default :
            return state
    }
}
export default settingsReducer