import React from "react";
import "./post.css";

import { NavLink } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/Images/";
  return (
    <>
      <div className="cols">
        <div className="maindiv">
          <div className="card" style={{ width: "19rem" }}>
            {post.photo ? (
              <>
                <img
                  src={PF + post.photo}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </>
            ) : (
              <>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </>
            )}

            <div className="card-body  ">
              <div className="cat">
                {post.categories.map((value, key) => {
                  return (
                    <span key={key} class="badge rounded-pill bg-danger">
                      {value}
                    </span>
                  );
                })}

                {/* <span class="badge rounded-pill bg-danger">PS5</span> */}
              </div>
              <NavLink className="link" to={`/post/${post._id}`}>
                <h4 className="card-title">{post.title}</h4>
              </NavLink>

              <p className="text-muted time">
                {new Date(post.createdAt).toDateString()}
              </p>
              <p className="card-text">{post.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
