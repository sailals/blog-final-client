import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <>
      <section className="sidebar mt-5 sticky-lg-top d-none d-lg-block">
        <div className="heading text-center mb-3 w-100">
          <span>Trending</span>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body text-black">
            <p className="card-text">
              Thor embarks on a journey unlike anything he's ever faced -- a
              quest for inner peace. However, his retirement gets interrupted by
              Gorr the God Butcher.
            </p>
          </div>
        </div>

        <div className="heading text-center mb-3 mt-4">
          <span>Categories</span>
        </div>

        <span class="badge rounded-pill bg-danger">PS5</span>
        <span class="badge rounded-pill bg-danger">Games</span>
        <span class="badge rounded-pill bg-danger">Movies</span>

        <span class="badge rounded-pill bg-danger">Netflix</span>
        <span class="badge rounded-pill bg-danger">Disney +</span>
        <span class="badge rounded-pill bg-danger">Tech</span>
      </section>
    </>
  );
}

export default Sidebar;
