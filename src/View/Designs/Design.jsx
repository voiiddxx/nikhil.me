import React from 'react'
import "./Design.css"
const Design = () => {
  return (
    <div className="design">
         <div className="project-text">
              
              <h1>Hello Designers</h1>
              <p>Me as a element of design have build some minimal user interfaces</p>
          </div>

          <div className="design-parent">
            <a href="https://www.figma.com/file/te3edq8CmsLB5pIh6olCdO/Teacher-Rating?type=design&node-id=1-2&mode=design&t=0ndylAeSspPrlNBW-0">
            <div className="design-card">
                <div className="design-image"></div>
            </div>
            </a>
            <a href="https://www.figma.com/file/X4EVwiwB7n91i1hAcRVNSV/Pro-Planet-app?type=design&mode=design&t=ZxgylaCUBni8VMRN-0">
            <div className="design-card">
                <div className="design-image-2"></div>
            </div>
            </a>
           <a href="https://www.figma.com/file/ISQ8YlexC8SOdEjfM8VSxA/Sb-Ui?type=design&mode=design&t=ZxgylaCUBni8VMRN-0">
           <div className="design-card">
                <div className="design-image-3"></div>
            </div>
           </a>
          </div>
    </div>
  )
}

export default Design
