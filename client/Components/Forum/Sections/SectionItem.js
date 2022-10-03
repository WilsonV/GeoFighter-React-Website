import React from "react";
import { connect } from "react-redux";
import { setCurrentThread } from "../../../store/forum";
import { FORUM_PAGE, useNavigationList, useNavigationPageUpdate, useNavigationUpdate } from "../NavigationContext";

const SectionItem = ({ thread, setAsCurrentThread }) => {
  const navigationList = useNavigationList()
  const updateNavList = useNavigationUpdate()
  const changeForumPage = useNavigationPageUpdate()

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }

  function handleClick() {
    setAsCurrentThread(thread)
    updateNavList([...navigationList, { name: FORUM_PAGE.THREAD, id: thread.id, title: thread.title }])
    changeForumPage({ name: FORUM_PAGE.THREAD, id: thread.id })
  }

  return (
    <div className="section-item">
      <div className="icon">
        <img src="../../postIcon.png" width={'100%'} />
      </div>
      <div className="title">
        <a onClick={handleClick}>{thread.title}</a>
        <div className="date">
          Started: [{new Date(thread.date).toLocaleDateString('en-US', dateOptions)}] by {thread.author?.username || 'unknown user'}
        </div>
      </div>
      <div className="details">by: {thread.author?.username || "unknown"}</div>
      <div className="small-details"><div>Replies</div>0</div>
      <div className="small-details"><div>Views</div>1</div>

    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    setAsCurrentThread(thread) {
      dispatch(setCurrentThread(thread))
    }
  }
}

export default connect(null, mapDispatch)(SectionItem)
