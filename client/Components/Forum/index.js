import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getForumCategories } from "../../store/forum"
import Category from "./Category"

const Forum = ({ forumCategories, getCategories }) => {

  useEffect(() => {
    getCategories()
  }, [])

  return (

    <div className="forum">
      Forum Page
      {forumCategories.map(category => <Category categoryInfo={category} key={category.name} />)}
    </div>
  )
}

const mapState = (state) => {
  console.log(state)
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
export default connect(mapState, mapDispatch)(Forum)
