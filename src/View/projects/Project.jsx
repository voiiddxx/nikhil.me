import React from 'react'
import "./Project.css"
const Project = () => {
  return (
    <div className="project-main">
        <div className="project-box">
            <div className="project-text">
                <h1>Checkout The Premium <br /> Projects and Explore</h1>
                <p>Expand your design skillset through live workshops, a-sync <br />lessons, and connect with like-minded individuals.</p>
            </div>
            <div className="project-card">
              {/* Pro Planet Card */}
              <div className="card-box">
                <a href="https://github.com/voiiddxx/pro-planet-server-">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/earth-7865127-6308176.png" alt="project" />
                </a>
                <h2>Pro Planet</h2>
                <p>React Js , Nodejs , MongoDB, <br />
CSS , Express js , CLoudinary</p>
              </div>
              {/* Pro Planet Card end */}
              <div className="card-box2">
              <a href="https://github.com/voiiddxx/Thread-react-node">
              <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-meta-10193096-8250233.png" alt="project" />
              </a>
                <h2>Thread Clone</h2>
                <p>React Js , Nodejs , MongoDB, <br />
CSS , Express js , CLoudinary</p>
              </div>
              <div className="card-box3">
              <a href="https://github.com/voiiddxx/bazaar">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-getting-a-discount-coupon-7743076-6241784.png?f=webp" alt="project" />
              </a>
                <h2>Bazaar</h2>
                <p>Flutter , Dart , Mongoose , <br /> Nodejs 
, Express js , CLoudinary</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project
