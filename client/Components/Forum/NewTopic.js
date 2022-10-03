import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { postNewTopic } from "../../store/forum";
import { useNavigationList, useNavigationUpdate, useNavigationPageUpdate, FORUM_PAGE } from "./NavigationContext";

const NewTopic = ({ sectionId, addNewTopic }) => {

  const navList = useNavigationList()
  const updateNavLinks = useNavigationUpdate()
  const changeForumPage = useNavigationPageUpdate()

  const [topicMessage, setTopicMessage] = useState({ title: '', message: '' })

  useEffect(() => {
    updateNavLinks([...navList, { name: FORUM_PAGE.NEWTOPIC, id: 0, title: "New Topic" }])

  }, [])

  function handleChanges(e) {
    setTopicMessage({ ...topicMessage, [e.target.name]: e.target.value })
  }

  async function submitTopic(e) {
    e.preventDefault()
    const currentThread = await addNewTopic(sectionId, topicMessage)

    const remainingNavList = [...navList]
    remainingNavList.pop()

    updateNavLinks([...remainingNavList, { name: FORUM_PAGE.THREAD, id: currentThread.id, title: currentThread.title }])
    changeForumPage({ name: FORUM_PAGE.THREAD, id: currentThread.id })
  }

  return (<div className="new-topic">
    <form onSubmit={submitTopic}>
      <input required className="title" placeholder="Title..." name="title" value={topicMessage.title} onChange={handleChanges} />
      <textarea required className="body" name="message" value={topicMessage.message} onChange={handleChanges} />

      <button type="submit" className="post-button" >Post Topic</button>

    </form>
  </div>)
}

const mapDispatch = (dispatch) => {
  return {
    async addNewTopic(sectionId, message) {
      return await dispatch(postNewTopic(sectionId, message))
    }
  }
}

export default connect(null, mapDispatch)(NewTopic)
