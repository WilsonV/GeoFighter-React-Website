import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import { getSectionThreads } from "../../store/forum";
import Navbar from "./Navbar";
import SectionItem from "./SectionItem";
import { useNavigationList, useNavigationUpdate } from "./NavigationContext";

const Section = ({ threads, loadThreads, sectionId }) => {
  // const updateNavList = useNavigationUpdate()
  // const navigationList = useNavigationList()

  // useEffect(() => {
  //   updateNavList([...navigationList, { path: `/section/:${sectionId}`, title: `Section ${sectionId}` }])
  // }, [])

  // const { sectionId } = useParams()

  useEffect(() => {
    loadThreads(sectionId)
  }, [])

  return (
    <div className="forum">
      {console.log("Threads", threads)}
      <div className="section-header">
        <button className="topic-button">New Topic</button>
      </div>
      <div className="forum-section">
        Threads in this Section:
        {threads.map(thread => <SectionItem key={thread.id} sectionItemInfo={thread} />)}
      </div>
    </div>
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
