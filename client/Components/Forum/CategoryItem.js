import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ categoryItemInfo }) => {

  console.log(categoryItemInfo)
  return (<div className="forum-category-item">
    <div className="icon">
      <img src="./postIcon.png" width={'100%'} />
    </div>
    <div className="title">
      <Link to={`/forum/section/${categoryItemInfo.id}`}>{categoryItemInfo.name}</Link>
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
