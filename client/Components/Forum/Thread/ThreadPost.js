import React from "react";
import parser from "bbcode-to-react";
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
        {parser.toReact(postInfo.body)}
      </div>
    </div>
  )
}

export default ThreadPost
