
// export const showitems=(product)=>{
//     return {
//         type:"SHOW_ITEMS",
//         payload:product
//     }
// }
export const selecteditemsID=(ID)=>{
    return {
        type:"ITEMS_ID",
        payload:ID
    }
}
export const additemsID=(data)=>{
    return {
        type:"ADD_ITEMS",
        payload:data
    }
}
export const removeitemsID=(data)=>{
    return {
        type:"REMOVE_ITEMS",
        payload:data
    }
}

export const loading=(data)=>{
    return{
        type:"loading",
        payload:data
    }
}