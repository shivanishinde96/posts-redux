import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'

class UserHeader extends Component {
    componentDidMount(){
        console.log('componentDidMount from UserHeader')
        this.props.fetchUsers(this.props.userId)
    }
    render() {
        console.log('UserHeader render method')
        const user=this.props.users.find(user=>user.id===this.props.userId)
        if(!user){
            return null
        }
        return (
            <div className='header'>
             {user.name}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('mapstatetoprops from userheader')
    return {users:state.users}
}

/*Alternate way of writing mapStateToProps*/
/*Extracting logic of mapStateToProps*/
/*
const mapStateToProps=(state,ownProps)=>{
    return {user:state.users.find(user=>user.id===ownProps.userId)}
}
*/

export default connect(mapStateToProps,{fetchUsers:fetchUsers})(UserHeader)