import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Latest from "../../Components/Latest&Trending/Latest";
import data from "./trending";
import dataG from "./trendGames";
import BackgroundAttachment from "../../Components/BackgroundAttachment/BackgroundAttachment";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [post, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        "https://blog-sailal-final.herokuapp.com/api/posts" + search
      );
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Carousel />
            <BackgroundAttachment title="Latest & Trending" />
            <Latest data={data} />
            <BackgroundAttachment title="Trending PS5 Games" />
            <Latest data={dataG} />
            <BackgroundAttachment title="Blog From Our Writers" />
            <Posts posts={post} />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
