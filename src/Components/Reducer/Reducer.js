export const initialState={
    basket:[],
}

export const getBasketTotal = (basket)=>

    basket?.reduce((amount,item)=>parseInt(item.price)+amount,0);
    
const reducer = (state,action)=>{
    switch(action.type){
        case "Add-to-basket":
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case "Remove-from-basket":
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );
            let newBasket = [...state.basket]
            if(index=>0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(
                    `Cant Remove Product. (id:${action.id}) is not in basket ` 
                )
            }
            return{
                ...state,
                basket:newBasket
            }
        case "Set-user":
            return{
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
            }
        default:
            return state;
    } 
}
export default reducer;