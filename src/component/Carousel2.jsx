import React from "react";
import "./Carousel2.css";

export default function Carousel2() {
  return (
    <>
      <div id="setting-width">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              id="Carousel2-btn"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              id="Carousel2-btn"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
             <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=900/layout-engine/automation/pb_Brand_Range_PNG_1250.jpg"
                className="d-block w-100 huge"
                alt="..."
              />
            
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=900/layout-engine/automation/pb_Brand_KW_Pan%20India_1255.jpg"
                className="d-block w-100 huge"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=900/layout-engine/automation/pb_Brand_FOOD_ITC_1224.jpg"
                className="d-block w-100 huge"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
            <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=900/layout-engine/automation/pb_Brand_MArs_MArs_1217.jpg"
                className="d-block w-100 huge"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon    next-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon    next-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
