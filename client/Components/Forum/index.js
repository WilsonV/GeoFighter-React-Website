import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getForumCategories } from "../../store/forum"

const Forum = ({ forumCategories, getCategories }) => {

  useEffect(() => {
    getCategories()
  }, [])

  return (

    <div>
      {console.log("Categories", forumCategories)}
      Forum Page
      {forumCategories.map(category => <div key={category.name}>Category: {category.name}</div>)}
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
      console.log("dispatching getForumCategories...")
      await dispatch(getForumCategories())
    }
  }
}
export default connect(mapState, mapDispatch)(Forum)
