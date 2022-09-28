import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getThreadPosts } from "../../store/forum";
import Reply from "./Reply";
import ThreadPost from "./ThreadPost"

const Thread = ({ loadThreadPosts, thread, threadId, threadPosts }) => {

  useEffect(() => {

    loadThreadPosts(threadId)
  }, [])
  return (
    <div className="forum">
      <div className="section-header">
        <div className="title">
          {thread.title}
        </div>
        <button className="topic-button">Reply</button>
      </div>
      <div className="forum-section">
        {threadPosts.map(post => <ThreadPost key={post.id} postInfo={post} />)}
      </div>
      <Reply />
    </div>)
}

const mapState = (state) => {
  return {
    thread: state.forum.currentThread || {},
    threadPosts: state.forum.threadPosts || [],
  }
}

const mapDispatch = (dispatch) => {
  return {
    async loadThreadPosts(threadId) {
      await dispatch(getThreadPosts(threadId))
    }
  }
}
export default connect(mapState, mapDispatch)(Thread)
