import React from 'react'

function Main(_props) {
    return (
        <div className="app-main">
          <div className="app-main-note-edit">
          <input type='text' id='title' autoFocus></input>
          <textarea id="body" placeholder="Write ur note here"> </textarea>
          </div>
         <div className="app-main-note-preview">
            <h1 className="preview-title">Title</h1>
            <div className='markdown-preview'>Note preview</div>

          </div> 
        </div>
    )
}

Main.propTypes = {

}

export default Main

