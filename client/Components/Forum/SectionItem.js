import React from "react";
import { FORUM_PAGE, useNavigationList, useNavigationPageUpdate, useNavigationUpdate } from "./NavigationContext";

const SectionItem = ({ sectionItemInfo }) => {
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
    updateNavList([...navigationList, { name: FORUM_PAGE.THREAD, id: sectionItemInfo.id, title: sectionItemInfo.title }])
    changeForumPage({ name: FORUM_PAGE.THREAD, id: sectionItemInfo.id })
  }

  return (
    <div className="section-item">
      <div className="icon">
        <img src="../../postIcon.png" width={'100%'} />
      </div>
      <div className="title">
        <a onClick={handleClick}>{sectionItemInfo.title}</a>
        <div className="date">
          Started: [{new Date(sectionItemInfo.date).toLocaleDateString('en-US', dateOptions)}] by {sectionItemInfo.author?.username || 'unknown user'}
        </div>
      </div>
      <div className="details">by: kenken</div>
      <div className="small-details"><div>Replies</div>0</div>
      <div className="small-details"><div>Views</div>1</div>

    </div>
  )
}

export default SectionItem
