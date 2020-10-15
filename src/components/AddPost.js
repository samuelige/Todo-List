import { Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import React from 'react'
import PostList from './PostList';

const AddPost = () => {
    return (
        <>
            <div className="container" style={{margin: '4rem auto'}}>
                <div className='grey-text center-align'>Todo-List</div>
                <form>
                    <div className="input-field">
                        <label htmlFor="post_title">Title</label>
                        <input type="text" name='title'/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="post_content">Content</label>
                        <textarea name="content" className="materialize-textarea"></textarea>
                    </div>
                    <Button color='primary' className='btn primary'>Submit <SendIcon /></Button>
                </form>
            </div>
            <PostList />
        </>

    )
}

export default AddPost
