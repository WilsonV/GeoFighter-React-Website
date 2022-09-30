import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getThreadPosts, setThreadPost } from "../../store/forum";
import Reply from "./Reply";
import ThreadPost from "./ThreadPost"

const Thread = ({ loadThreadPosts, thread, threadId, threadPosts, cleanThreads }) => {

  const [page, setPage] = useState(1)

  useEffect(() => {
    loadThreadPosts(threadId)

    return () => {
      cleanThreads()
    }
  }, [])

  useEffect(() => {

  }, [page])

  function changeViewingPage(evt) {
    evt.preventDefault()
    console.log("page button val", parseInt(evt.target.value))
    setPage(parseInt(evt.target.value))
  }
  function pageNumberButtons() {
    const divs = []
    for (let i = 0; i < threadPosts.length / 10; i++) {
      divs.push(<button key={i} className="pageButtons" value={(i + 1)} onClick={changeViewingPage}>{i + 1}</button>)
    }
    return divs
  }
  return (
    <div className="forum">
      <div className="section-header">
        <div className="title">
          <p>{thread.title}</p>
          {threadPosts.length > 10 ?
            pageNumberButtons()
            : null}
        </div>
        <button className="topic-button">Reply</button>
      </div>
      <div className="forum-section">
        {threadPosts
          .filter((post, index) => index < (page * 10) && index > (page - 1) * 10)
          .map(post => <ThreadPost key={post.id} postInfo={post} />)}
      </div>
      <Reply threadId={threadId} />
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
    },
    async cleanThreads() {
      await dispatch(setThreadPost([]))
    }
  }
}
export default connect(mapState, mapDispatch)(Thread)
