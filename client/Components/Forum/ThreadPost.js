import React from "react";

const ThreadPost = ({ postInfo }) => {

  return (
    <div className="forum-post">
      <div className="title">
        {postInfo.title}
      </div>
      <div className="author">
        {postInfo.author.username}
        <img src="./user.png" />
      </div>

      <div className="body">
        {postInfo.body}
      </div>
    </div>
  )
}

export default ThreadPost
