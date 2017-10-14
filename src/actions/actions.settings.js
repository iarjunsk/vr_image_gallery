export function show_image(new_id){
    return {
        type:"SHOW_IMAGE",
        payload:{
            imageID : new_id
        }
    }
}



