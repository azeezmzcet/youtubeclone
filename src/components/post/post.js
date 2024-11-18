import React from 'react';
import './post.css';

const Post = ({videovarname}) => {
  return (
    <div className='post'>
        <div className="postimagecon">
            <img className='postimg' src={videovarname.img} alt="m" />
            <span className="postduration">{videovarname.duration}</span>
        </div>

        <div className="postinfocontainer">
            <img  className="postavatar" src={videovarname.channel.avatar} alt="m" />
            <div className="postinfo">
                <span className="posttitle">{videovarname.title}</span>
                <span className="postChennel">{videovarname.channel.name}</span>
                <span className="postDetail">{videovarname.views}  Views . {videovarname.date}</span>
            </div>
        </div>
    </div>
  )
}

export default Post