import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSectionThreads } from "../../store/forum";
import SectionItem from "./SectionItem";

const Section = ({ threads, loadThreads, sectionId }) => {

  useEffect(() => {
    loadThreads(sectionId)
  }, [])

  return (
    <div className="forum">
      <div className="section-header">
        <button className="topic-button">New Topic</button>
      </div>
      <div className="forum-section">
        {threads.length ? <p>Threads</p> : <p>No Threads In This Section</p>}
        {threads.map(thread => <SectionItem key={thread.id} thread={thread} />)}
      </div>
    </div >
  )
}

const mapState = (state) => {
  return {
    threads: state.forum.threads || []
  }
}

const mapDispatch = (dispatch) => {
  return {
    async loadThreads(sectionId) {
      await dispatch(getSectionThreads(sectionId))
    }
  }
}
export default connect(mapState, mapDispatch)(Section)
