import React, { useState } from "react";

const Reply = () => {

  const [replyMessage, setReplyMessage] = useState("")

  function handleTextChange(evt) {
    setReplyMessage(evt.target.value)
  }

  return (<div className="reply-area">
    <textarea rows={10} placeholder={"Reply goes here"} value={replyMessage} onChange={handleTextChange}>

    </textarea>
    <button className="post-button">Post Reply</button>
  </div>)
}

export default Reply
