import React, { useContext, useEffect } from "react"
import { connect } from "react-redux"
import { getForumCategories } from "../../store/forum"
import Category from "./Category"
import Navbar from "./Navbar"
import { FORUM_PAGE, useNavigationPage } from "./NavigationContext"
import Section from "./Section"

const Forum = ({ forumCategories, getCategories }) => {
  const currentPage = useNavigationPage()

  console.log("Forum pages are", FORUM_PAGE)
  console.log("Current Page", currentPage)
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Navbar />
      {currentPage.name === FORUM_PAGE.HOME &&
        <div className="forum">
          {forumCategories.map(category => <Category categoryInfo={category} key={category.name} />)}
        </div>}
      {currentPage.name === FORUM_PAGE.SECTION &&
        <Section sectionId={currentPage.id} />
      }
    </>
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
