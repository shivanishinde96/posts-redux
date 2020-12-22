const userReducer=(state=[],action)=>{
    console.log('userReducer called')
    switch(action.type){
        case 'FETCH_USERS':
            return [...state,action.payload]
        default:
            return state
    }
}

export default userReducer