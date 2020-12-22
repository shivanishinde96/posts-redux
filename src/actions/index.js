import jsonplaceholder from '../apis/jsonplaceholder'
import lodash from 'lodash'

export const fetchPosts=()=>{
    console.log('action called for fetching posts')
    return async (dispatch)=>{
    const response=await jsonplaceholder.get('/posts')
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
        })
    }
}

export const fetchUsers=(id)=>{
    console.log('action called for fetching users')
    return async (dispatch)=>{
        const response=await jsonplaceholder.get(`/users/${id}`)
        dispatch({
            type:'FETCH_USERS',
            payload:response.data
        })
    }
}

export const selectedPost=(post)=>{
    return {
        type:'SELECTED_POST',
        payload:post
    }
}