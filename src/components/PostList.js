import React from 'react'
import PostDetails from './PostDetails'

const PostList = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <PostDetails/>
                    <PostDetails/>
                    <PostDetails/>
                    <PostDetails/>
                </div>
            </div>
        </div>
    )
}

export default PostList
