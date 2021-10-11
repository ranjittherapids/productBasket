import { ITEM_ID } from "../store/types"

const initialState={
    product:[],
    ID:'',
    basket:[],
    loading:true
}
 export const reducer=(state=initialState,action)=>{
    const {type,payload}=action
switch(type)
{
    case 'loading':
        return{...state,loading:payload}
    case"GET_ITEMS_SUCCESS_ACTION":  //SHOW_ITEMS
    return {...state,product:payload}
    case ITEM_ID:
    return{...state,ID:payload}
    case"ADD_ITEMS":
    return{...state,basket:[...state.basket,payload]}
     case"REMOVE_ITEMS":
    return {...state,basket:[...state.basket.slice(0,payload),
        ...state.basket.slice(payload + 1)
    ]}
    default:
        return state
}
}