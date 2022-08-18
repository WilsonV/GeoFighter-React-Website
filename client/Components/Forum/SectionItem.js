import React from "react";

const SectionItem = ({ sectionItemInfo }) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  return (
    <div className="section-item">
      <div className="icon"></div>
      <div className="title">
        {sectionItemInfo.title}
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
