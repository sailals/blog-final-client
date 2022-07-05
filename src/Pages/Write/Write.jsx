import React, { useContext, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./write.css";
import { Context } from "./../../context/Context";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  let arr = cat.split(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    arr.map((value, key) => {
      category.push(value);
    });
    console.log(category);
    const newPost = {
      username: user.username,
      title,
      desc,
      categories: category,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
      try {
        const res = await axios.post(
          "http://localhost:5000/api/posts",
          newPost
        );
        window.location.replace("/");
      } catch (err) {}
    }
  };

  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="write">
                <div className="single mt-5">
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="fileInput">
                        <i className="fas fa-plus writeIcon fa-2x "></i>
                      </label>
                      <span className="ms-3">Add Post Image</span>
                    </div>
                    <div className="col">
                      <input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        name=""
                        id="fileInput"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  <div className="card cardImage" style={{ width: "100%" }}>
                    {file && (
                      <img
                        src={URL.createObjectURL(file)}
                        className="card-img-top img-fluid"
                        alt="..."
                        style={{ height: "auto" }}
                      />
                    )}

                    <div className="card-body st">
                      <form onSubmit={handleSubmit}>
                        <h4 className="card-title text-center title">
                          <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Add Title"
                          />
                        </h4>
                        <h4 className="card-title text-center title">
                          <input
                            onChange={(e) => setCat(e.target.value)}
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Add Categories"
                          />
                        </h4>
                        <textarea
                          name=""
                          onChange={(e) => setDesc(e.target.value)}
                          className="form-control"
                          placeholder="Add Description"
                        ></textarea>
                        <button className="btn btn-primary mt-4 w-100">
                          Add Post
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Write;
