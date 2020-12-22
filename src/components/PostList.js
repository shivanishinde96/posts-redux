import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, selectedPost } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component {
    componentDidMount() {
        console.log('componentdidmount from postlist')
        this.props.fetchPosts()
    }
    postList() {
        console.log('postlist function')
        if (!this.props.posts) {
            return null
        }
        return this.props.posts.map((post) => {
            return (
                <div className='item' key={post.id} onClick={() => this.props.selectedPost(post)} className='post'>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                    <div class="ui horizontal divider">
                        ----------
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log('render method from postlist component')
        return (
            <div className='ui relaxed divided list'>
                {this.postList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapstatetoprops from postlist')
    return { posts: state.posts, selectedPost: state.selectedPost }
}

export default connect(mapStateToProps, {
    fetchPosts: fetchPosts,
    selectedPost: selectedPost
})(PostList)

