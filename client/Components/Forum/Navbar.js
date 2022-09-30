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

  useEffect(() => {
    stretchWhenSticky()
  }, [])

  function stretchWhenSticky() {
    const navbarTop = document.getElementById("#forum-navbar-top")
    const navbar = document.getElementById("#forum-navbar")

    const observer = new IntersectionObserver(([e]) => {
      navbar.classList.toggle("full-width", e.intersectionRatio < 1)
    }, { threshold: [0, 1] })

    observer.observe(navbarTop)
  }
  return (<>
    <div id="#forum-navbar-top" className="forum-navbar-top"></div>
    <div id="#forum-navbar" className="forum-navbar">
      <img src="../../home.png" />
      <a onClick={handleHomeButtonClick}>
        Home
      </a>
      {navigationList.map((nav, index) => {
        return <a key={nav.title} onClick={() => handlePathButtonClick(nav, index)}> {' > '} {nav.title} </a>
      })}
    </div>
  </>
  )
}

export default Navbar
