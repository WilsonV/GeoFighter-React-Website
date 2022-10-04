import React from "react";
import { FORUM_PAGE, useNavigationList, useNavigationPageUpdate, useNavigationUpdate } from "../NavigationContext";

const CategoryItem = ({ categoryItemInfo }) => {

  console.log("Cat INFO:", categoryItemInfo)
  const navigationList = useNavigationList()
  const updateNavList = useNavigationUpdate()
  const changeForumPage = useNavigationPageUpdate()

  function handleClick() {
    updateNavList([...navigationList, { name: FORUM_PAGE.SECTION, id: categoryItemInfo.id, title: categoryItemInfo.name }])
    changeForumPage({ name: FORUM_PAGE.SECTION, id: categoryItemInfo.id })
  }

  return (<div className="forum-category-item">
    <div className="icon">
      <img src="./postIcon.png" width={'100%'} />
    </div>
    <div className="title" >
      {/* <Link to={`/forum/section/${categoryItemInfo.id}`}>{categoryItemInfo.name}</Link> */}
      <a onClick={handleClick}>{categoryItemInfo.name}</a>
      <div className="description">{categoryItemInfo.description}</div>
    </div>
    <div className="details">
      <div>Threads</div>
      {categoryItemInfo.threads.length}
    </div>
    <div className="details">
      <div>Post</div>
      {categoryItemInfo.threads.reduce((k, i) => k + i.threadposts.length, 0)}
    </div>
  </div>)
}

export default CategoryItem
