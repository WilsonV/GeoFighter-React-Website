import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FORUM_PAGE, useNavigationList, useNavigationPageUpdate, useNavigationUpdate } from "./NavigationContext";

const Navbar = () => {
  const navigationList = useNavigationList()
  const updateNavList = useNavigationUpdate()
  const changeForumPage = useNavigationPageUpdate()

  function handleHomeButtonClick() {
    console.log("Home clicked")
    updateNavList([])
    changeForumPage({ name: FORUM_PAGE.HOME, id: 0 })
  }

  function handlePathButtonClick(nav, navIndex) {
    updateNavList(navigationList.filter((navItem, index) => index <= navIndex))
    changeForumPage({ name: nav.name, id: nav.id })
  }
  return (
    <div className="forum-navbar">
      <img src="../../home.png" />
      <a onClick={handleHomeButtonClick}>
        Home
      </a>
      {navigationList.map((nav, index) => {
        return <a key={nav.title} onClick={() => handlePathButtonClick(nav, index)}> {' > '} {nav.title} </a>
      })}
    </div>
  )
}

export default Navbar
