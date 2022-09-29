import React, { useState } from "react";
import { connect } from "react-redux";
import { getThreadPosts, postReply } from "../../../store/forum";

const Reply = ({ threadId, addReply }) => {

  const [replyMessage, setReplyMessage] = useState("")

  function handleTextChange(evt) {
    setReplyMessage(evt.target.value)
  }

  function replyToThread(evt) {
    addReply(threadId, replyMessage)
    setReplyMessage("")
  }

  return (<div className="reply-area">
    <textarea rows={10} placeholder={"Reply goes here"} value={replyMessage} onChange={handleTextChange}>

    </textarea>
    <button className="post-button" onClick={replyToThread}>Post Reply</button>
  </div>)
}

const mapDispatch = (dispatch) => {
  return {
    async addReply(threadId, message) {
      await dispatch(postReply(threadId, message))
      await dispatch(getThreadPosts(threadId))
    }
  }
}
export default connect(null, mapDispatch)(Reply)
