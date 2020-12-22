const postReducer=(state=[],action)=>{
    console.log('postreducer called')
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload
    default :
        return state
    }
}

export default postReducer