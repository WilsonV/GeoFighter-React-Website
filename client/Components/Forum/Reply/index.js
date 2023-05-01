import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getThreadPosts, postReply } from "../../../store/forum";
import TextAreaUtil from "../TextAreaUtil";

const Reply = ({ threadId, addReply, TheUsersName }) => {

  const [loading, setLoading] = useState(true)
  const [replyMessage, setReplyMessage] = useState({ title: `Reply from ${TheUsersName}`, message: '' })

  useEffect(() => {
    setLoading(false)
  }, [])

  function handleTextChange(evt) {
    setReplyMessage({ ...replyMessage, [evt.target.name]: evt.target.value })
  }

  function updateReplyMessage(message) {
    setReplyMessage({ ...replyMessage, message })
  }

  async function replyToThread(evt) {
    setLoading(true)
    evt.preventDefault()
    await addReply(threadId, replyMessage)
    setReplyMessage({ title: `Reply from ${TheUsersName}`, message: '' })
    setLoading(false)
  }

  return (
    loading ? <div>Loading...</div> :
      <form className="reply-area" onSubmit={replyToThread}>
        <input required className="title" pladceholder={"Title..."} onChange={(e) => handleTextChange(e)} name='title' value={replyMessage.title} />

        <TextAreaUtil textAreaId={"#reply-textarea"} updateReplyMessage={updateReplyMessage} />

        <textarea id="#reply-textarea" required rows={10} placeholder={"Reply goes here"} value={replyMessage.message} onChange={handleTextChange} name='message' />

        <button type="submit" className="post-button" >Post Reply</button>
      </form>)
}

const mapState = (state) => {
  return {
    TheUsersName: state.auth.username || 'Unknown'
  }
}

const mapDispatch = (dispatch) => {
  return {
    async addReply(threadId, message) {
      await dispatch(postReply(threadId, message))
      await dispatch(getThreadPosts(threadId))
    }
  }
}
export default connect(mapState, mapDispatch)(Reply)
