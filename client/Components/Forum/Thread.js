import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getThreadPosts } from "../../store/forum";

const Thread = ({ loadThreadPosts, threadId, threadPosts }) => {

  useEffect(() => {
    loadThreadPosts(threadId)
  }, [])
  return (
    <div className="forum">
      <div className="section-header">
        <button className="topic-button">Reply</button>
      </div>
      <div className="forum-section">
        {threadPosts.map(post => <div key={post.id}> {post.title}<br /> {post.body}</div>)}
      </div>
    </div>)
}

const mapState = (state) => {
  return {
    threadPosts: state.forum.threadPosts || []
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
