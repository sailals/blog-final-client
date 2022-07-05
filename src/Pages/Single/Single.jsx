import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./single.css";
import { Context } from "./../../context/Context";

function Single() {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://blog-sailal-final.herokuapp.com/api/posts/${path}`
      );
      setPost(res.data);
      setCat(res.data.categories);
    };
    fetchPost();
  }, [path]);

  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://blog-sailal-final.herokuapp.com/api/posts/${post._id}`,
      {
        username: user.username,
        title,
        desc,
      }
    );
    setUpdate(false);
    window.location.replace("/");
  };

  const handleDelete = async () => {
    await axios.delete(
      `https://blog-sailal-final.herokuapp.com/api/posts/${post._id}`,
      {
        data: { username: user.username },
      }
    );
    window.location.replace("/");
  };
  const PF = "https://blog-sailal-final.herokuapp.com/Images/";

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-9">
            <div className="single mt-5">
              <div className="card cardImage" style={{ width: "100%" }}>
                {post.photo && (
                  <>
                    <img
                      src={PF + post.photo}
                      className="card-img-top img-fluid "
                      alt="..."
                      style={{ height: "auto" }}
                    />
                  </>
                )}

                <div className="card-body st">
                  <div className="cat">
                    {cat.map((c) => (
                      <NavLink className="link" to={`/?cat=${c}`}>
                        <span class="badge rounded-pill bg-danger">{c}</span>
                      </NavLink>
                    ))}
                  </div>
                  {update ? (
                    <>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name=""
                        id=""
                        className="form-control text-control"
                        placeholder="Enter New Title"
                      />
                    </>
                  ) : (
                    <>
                      <h4 className="card-title text-center title">
                        {post.title}
                      </h4>
                      {user?.username === post.username && (
                        <div className="singlePostContainer  ">
                          <div className="row">
                            <div className="col ">
                              <i
                                onClick={() => setUpdate(true)}
                                className="singlePostIcon far fa-edit fa-2x icon1"
                              ></i>
                            </div>
                            <div className="col text-end">
                              <i
                                onClick={handleDelete}
                                className="singlePostIcon far fa-trash-alt fa-2x icon2"
                              ></i>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <div className="row mt-4">
                    <div className="col">
                      <NavLink className="link" to={`/?user=${post.username}`}>
                        <p className="author">{post.username}</p>
                      </NavLink>
                    </div>
                    <div className="col text-end">
                      <p className="text-muted time ">
                        {new Date(post.createdAt).toDateString()}
                      </p>
                    </div>
                  </div>
                  {update ? (
                    <>
                      <textarea
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control text-control"
                        name=""
                        id=""
                        placeholder="Enter New Description"
                      ></textarea>
                      <button
                        onClick={handleUpdate}
                        className="btn btn-primary mt-4 w-100"
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="card-text">{post.desc}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
