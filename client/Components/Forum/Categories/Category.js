import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const Category = ({ categoryInfo }) => {

  const [expand, setExpand] = useState(true)

  function handleExpand() {
    setExpand(!expand)
    document.getElementById(`#category-${categoryInfo.name}`).classList.toggle('category-collapsed')
  }

  return (
    <div id={`#category-${categoryInfo.name}`} className="forum-category">

      <div className="top">
        {categoryInfo.name}
        <button className="expand" onClick={handleExpand}>+</button>
      </div>
      <div className="content">
        {categoryInfo.sections.map(section => <CategoryItem key={section.id} categoryItemInfo={{ ...section, categoryName: categoryInfo.name }} />)}
      </div>
    </div>
  )
}

export default Category
