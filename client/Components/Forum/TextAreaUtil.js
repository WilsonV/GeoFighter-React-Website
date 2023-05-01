import React, { useEffect } from "react";
let textArea;

const TextAreaUtil = ({ textAreaId, updateReplyMessage }) => {

  useEffect(() => {
    textArea = document.getElementById(textAreaId)
  }, [])

  function addTagBetweenSelection(startTag, endTag) {
    let selectionStart = textArea.selectionStart
    let selectionEnd = textArea.selectionEnd

    let textBefore = textArea.value.substring(0, selectionStart)
    let selectedText = textArea.value.substring(selectionStart, selectionEnd)
    let textAfter = textArea.value.substring(selectionEnd)

    updateReplyMessage(`${textBefore} ${startTag}${selectedText}${endTag} ${textAfter}`)
  }

  function boldSelection() {
    addTagBetweenSelection('[B]', '[/B]')
  }
  function italicSelection() {
    addTagBetweenSelection('[I]', '[/I]')
  }
  function underlineSelection() {
    addTagBetweenSelection('[U]', '[/U]')
  }
  function strikethroughSelection() {
    addTagBetweenSelection('[S]', '[/S]')
  }
  function imageSelection() {
    addTagBetweenSelection('[IMG]', '[/IMG]')
  }
  function urlSelection() {
    addTagBetweenSelection('[URL]', '[/URL]')
  }

  return (
    <div className="util-bar">
      <button type="button" onClick={boldSelection}><b>B</b></button>
      <button type="button" onClick={italicSelection}><i>I</i></button>
      <button type="button" onClick={underlineSelection}><u>U</u></button>
      <button type="button" onClick={strikethroughSelection}><s>S</s></button>
      <button type="button" onClick={urlSelection}><img src="./url.png" /></button>
      <button type="button" onClick={imageSelection}><img src="./image.png" /></button>

    </div>
  )
}

export default TextAreaUtil
