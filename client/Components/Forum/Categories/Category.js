import React from "react";
import CategoryItem from "./CategoryItem";

const Category = ({ categoryInfo }) => {
  return (
    <div className="forum-category">
      <div className="top">
        {categoryInfo.name}
      </div>
      <div className="content">
        {categoryInfo.sections.map(section => <CategoryItem key={section.id} categoryItemInfo={{ ...section, categoryName: categoryInfo.name }} />)}
      </div>
    </div>
  )
}

export default Category
