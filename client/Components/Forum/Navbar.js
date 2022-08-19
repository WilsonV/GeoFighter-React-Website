import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigationList } from "./NavigationContext";

const Navbar = () => {
  const navigationList = useNavigationList()

  // const updateNavList = useNavigationUpdate()
  // useEffect(() => {
  //   updateNavList([...navigationList, { path: '/', title: 'Main Home' }])
  // }, [])

  return (
    <div className="forum-navbar">
      <Link to='/forum'>
        <img src="../../home.png" /> Home
      </Link>
      {navigationList.map(nav => {
        return <Link key={nav.title} to={nav.path}> {' > '} {nav.title}</Link>
      })}
    </div>
  )
}

export default Navbar
