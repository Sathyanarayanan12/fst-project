import React from 'react'
import "./post.css"
import { Link } from 'react-router-dom'
export default function Post() {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/28860862/pexels-photo-28860862/free-photo-of-vibrant-nightlife-on-fremont-street-las-vegas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""/>
        <div className="postInfo">
            <div className="postCats">
            <span className="postCat">
                <Link className="link" to="/posts?cat=Music">
                Music
                </Link>
            </span>
            <span className="postCat">
                <Link className="link" to="/posts?cat=Music">
                Life
                </Link>
            </span>
            </div>
            <span className="postTitle">
            <Link to="/post/abc" className="link">
                Lorem ipsum dolor sit amet
            </Link>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}
