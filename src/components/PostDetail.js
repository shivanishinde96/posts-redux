import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostDetail extends Component {
    render() {
        if(!this.props.selectedpost){
            return <div>Select a Post</div>
        }
        return (
            <div>
                Post Details:
                <h3>{this.props.selectedpost.title}</h3>
                <p>{this.props.selectedpost.body}</p>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {selectedpost:state.selectedpost}
}

export default connect(mapStateToProps)(PostDetail)
