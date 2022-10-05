import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getThreadPosts, setThreadPost } from "../../../store/forum";
import Reply from "../Reply";
import ThreadPost from "./ThreadPost"

const Thread = ({ loadThreadPosts, thread, threadId, threadPosts, cleanThreads }) => {

  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)

  useEffect(async () => {
    await loadThreadPosts(threadId)

    setLoading(false)
    document.getElementById("#forum-div").classList.remove('collapsed')

    return () => {
      cleanThreads()
    }
  }, [])

  useEffect(() => {

  }, [page])

  function changeViewingPage(evt) {
    evt.preventDefault()
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
    <div id="#forum-div" className="forum collapsed">
      {loading ? <div>Loading....</div> : <>

        <div className="section-header">
          <div className="title">
            <p>{thread.title}</p>
            {threadPosts.length > 10 ?
              pageNumberButtons()
              : null}
          </div>
        </div>

        <div className="forum-section">
          {threadPosts
            .filter((post, index) => index < (page * 10) && index >= (page - 1) * 10)
            .map(post => <ThreadPost key={post.id} postInfo={post} />)}
        </div>
        {thread.openStatus ?
          <Reply threadId={threadId} /> :
          <button disabled className="lock-button">LOCKED</button>}
      </>}
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
