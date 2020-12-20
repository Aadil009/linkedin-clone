import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbsUpAllOutlinedIcon from '@material-ui/icons/ThumbsUpAllOutlined'
// import { Avatar} from '@material-ui/core';
function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header" >
                <Avatar />
                <div className="post__info">
                    <h2>Aadil Sayyed</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post__body">
                <p>Message goes here</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbsUpAllOutlinedIcon} title="Like" color="grey" />
            </div>
        </div>
    )
}

export default Post
