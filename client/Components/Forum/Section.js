import React from "react";
import { useParams } from "react-router-dom"

const Section = () => {
  const { sectionId } = useParams()

  console.log("loading id", sectionId)

  return (
    <div className="forum">
      Section #{sectionId}
      <div className="forum-section">
        Section
      </div>
    </div>
  )
}

export default Section
