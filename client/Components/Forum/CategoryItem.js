import React from "react";
import { Link } from "react-router-dom";
import { FORUM_PAGE, useNavigationList, useNavigationPageUpdate, useNavigationUpdate } from "./NavigationContext";

const CategoryItem = ({ categoryItemInfo }) => {

  const navigationList = useNavigationList()
  const updateNavList = useNavigationUpdate()
  const changeForumPage = useNavigationPageUpdate()

  function handleClick() {
    updateNavList([...navigationList, { path: `/forum`, title: categoryItemInfo.name }])
    changeForumPage({ name: FORUM_PAGE.SECTION, id: categoryItemInfo.id })
  }

  return (<div className="forum-category-item">
    <div className="icon">
      <img src="./postIcon.png" width={'100%'} />
    </div>
    <div className="title" onClick={handleClick}>
      {/* <Link to={`/forum/section/${categoryItemInfo.id}`}>{categoryItemInfo.name}</Link> */}
      <a>{categoryItemInfo.name}</a>
    </div>
    <div className="details">
      <div>Threads</div>
      3
    </div>
    <div className="details">
      <div>Post</div>
      5
    </div>
    <div className="last-post">
      by: kenken
    </div>
  </div>)
}

export default CategoryItem
