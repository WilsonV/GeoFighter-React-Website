import React, { useContext, useState } from "react";

export const FORUM_PAGE = {
  HOME: 'HOME',
  SECTION: 'SECTION',
  THREAD: 'THREAD',
  NEWTOPIC: 'NEWTOPIC'
}

const NavigationContext = React.createContext()
const NavigationUpdateContext = React.createContext()
export const NavigationPageContext = React.createContext()
const NavigationPageUpdateContext = React.createContext()

export function useNavigationList() {
  return useContext(NavigationContext)
}
export function useNavigationUpdate() {
  return useContext(NavigationUpdateContext)
}
export function useNavigationPage() {
  return useContext(NavigationPageContext)
}

export function useNavigationPageUpdate() {
  return useContext(NavigationPageUpdateContext)
}

const NavigationProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState({ name: FORUM_PAGE.HOME, id: 0 })

  function changeForumPage(page) {
    setCurrentPage(page)
  }

  const [navigationList, setNavigationList] = useState([])

  function updateNavigationList(list) {
    setNavigationList(list)
  }

  return (
    <NavigationContext.Provider value={navigationList}>
      <NavigationUpdateContext.Provider value={updateNavigationList}>
        <NavigationPageContext.Provider value={currentPage}>
          <NavigationPageUpdateContext.Provider value={changeForumPage}>
            {children}
          </NavigationPageUpdateContext.Provider>
        </NavigationPageContext.Provider>
      </NavigationUpdateContext.Provider>
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
