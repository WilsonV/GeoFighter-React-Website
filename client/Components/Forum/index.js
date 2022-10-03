import React from "react"
import ShowCategories from "./Categories"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { FORUM_PAGE, useNavigationPage } from "./NavigationContext"
import NewTopic from "./NewTopic"
import Section from "./Sections"
import Thread from "./Thread"

const Forum = () => {

  const currentPage = useNavigationPage()

  return (
    <>
      <Navbar />
      {currentPage.name === FORUM_PAGE.HOME &&
        <ShowCategories />
      }
      {currentPage.name === FORUM_PAGE.SECTION &&
        <Section sectionId={currentPage.id} />
      }
      {currentPage.name === FORUM_PAGE.THREAD &&
        <Thread threadId={currentPage.id} />}
      {currentPage.name === FORUM_PAGE.NEWTOPIC &&
        <NewTopic sectionId={currentPage.id} />
      }
      <Footer />
    </>
  )
}


export default Forum
