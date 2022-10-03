import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSectionThreads } from "../../../store/forum";
import SectionItem from "./SectionItem";
import { useNavigationPageUpdate, FORUM_PAGE } from "../NavigationContext";

const Section = ({ threads, loadThreads, sectionId }) => {

  const [loading, setLoading] = useState(true)

  const updateNavPage = useNavigationPageUpdate()
  useEffect(async () => {
    await loadThreads(sectionId)
    setLoading(false)

    document.getElementById("#forum-div").classList.remove('collapsed')
  }, [])

  function handleNewTopic(evt) {
    evt.preventDefault()
    updateNavPage({ name: FORUM_PAGE.NEWTOPIC, id: sectionId })
  }

  return (
    <div id="#forum-div" className="forum collapsed">
      {loading ? <div>Loading...</div> : <>
        <div className="section-header">
          <button className="topic-button" onClick={handleNewTopic}>New Topic</button>
        </div>

        <div className="forum-section">
          {threads.length ? <p>Threads</p> : <p>No Threads In This Section</p>}
          {threads.map(thread => <SectionItem key={thread.id} thread={thread} />)}
        </div>
      </>}
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
