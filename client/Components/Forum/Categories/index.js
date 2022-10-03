import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Category from "./Category";
import { getForumCategories } from "../../../store/forum";

const ShowCategories = ({ forumCategories, getCategories }) => {

  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    await getCategories()
    setLoading(false)

    document.getElementById("#forum-div").classList.remove('collapsed')
  }, [])


  return (<div id="#forum-div" className="forum collapsed">
    {loading ?
      <div>Loading...</div> :
      <> {forumCategories.map(category => <Category categoryInfo={category} key={category.name} />)}</>
    }
  </div>)
}


const mapState = (state) => {
  return {
    forumCategories: state.forum.categories || []
  }
}

const mapDispatch = (dispatch) => {
  return {
    async getCategories() {
      await dispatch(getForumCategories())
    }
  }
}

export default connect(mapState, mapDispatch)(ShowCategories)
