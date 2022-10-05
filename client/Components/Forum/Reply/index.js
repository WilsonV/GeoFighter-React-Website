import React, { useState } from "react";
import { connect } from "react-redux";
import { getThreadPosts, postReply } from "../../../store/forum";
import TextAreaUtil from "../TextAreaUtil";

const Reply = ({ threadId, addReply }) => {

  const [replyMessage, setReplyMessage] = useState({ title: '', message: '' })

  function handleTextChange(evt) {
    setReplyMessage({ ...replyMessage, [evt.target.name]: evt.target.value })
  }

  function updateReplyMessage(message) {
    setReplyMessage({ ...replyMessage, message })
  }

  function replyToThread(evt) {
    evt.preventDefault()
    addReply(threadId, replyMessage)
    setReplyMessage({ title: '', message: '' })
  }

  return (<form className="reply-area" onSubmit={replyToThread}>
    <input required className="title" placeholder={"Title..."} onChange={(e) => handleTextChange(e)} name='title' value={replyMessage.title} />

    <TextAreaUtil textAreaId={"#reply-textarea"} updateReplyMessage={updateReplyMessage} />

    <textarea id="#reply-textarea" required rows={10} placeholder={"Reply goes here"} value={replyMessage.message} onChange={handleTextChange} name='message' />

    <button type="submit" className="post-button" >Post Reply</button>
  </form>)
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
