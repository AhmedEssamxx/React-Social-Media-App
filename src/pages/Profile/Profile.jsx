import React from 'react'
import "./Profile.css"
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from '../../components/rightbar/rightbar';
import Feed from '../../components/feed/feed';

export default function Profile() {
  return ( 
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="assets/posts/9.jpg" alt="" />
            <img className='profileUserImg' src="assets/person/1.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Roony</h4>
                <span className='profileInfoDesc'>Hello My Friends</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed />
        <Rightbar profile/>
        </div>
    </div>
    </div>
      </>
  )
}
