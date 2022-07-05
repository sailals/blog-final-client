import React from "react";
import "./car.css";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="overlay">
              <img
                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/god-of-war-ragnarok-trend.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h5
                style={{ fontWeight: "500" }}
                className="display-5  text-white"
              >
                God of War Ragnarok{" "}
              </h5>
              <p style={{ fontWeight: "500" }} className="text-white">
                Report's suggest that next sequel in God of War is set to be
                released in Nov 2022
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="overlay">
              <img
                src="https://gameranx.com/wp-content/uploads/2021/07/Assassins-Creed-1024x576.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h5
                style={{ fontWeight: "500" }}
                className="display-5  text-white"
              >
                Assassins Creed Infinity
              </h5>
              <p style={{ fontWeight: "500" }} className="text-white">
                Next Assassins creed codenamed infinity, reports says will have
                multiple setting for players to explore
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="overlay">
              <img
                src="https://cdn.vox-cdn.com/thumbor/5SisWuIBiiycjAvy_6wil6L_krM=/0x0:1088x612/1200x0/filters:focal(0x0:1088x612):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22031169/00_PlayStation_FAQ_featured_imag.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h5
                style={{ fontWeight: "500" }}
                className="display-5  text-white"
              >
                Playstation 5
              </h5>
              <p style={{ fontWeight: "500" }} className="text-white">
                New Playstation 5 pro in developement
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
