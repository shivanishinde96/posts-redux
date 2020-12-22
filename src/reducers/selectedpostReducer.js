const selectedpostReducer=(state=null,action)=>{
    switch(action.type){
        case 'SELECTED_POST':
            return action.payload
        default :
            return state
    }
}

export default selectedpostReducer