import React from "react";

function Slider() {
  return (
    <>
      <section className="slider_section">
        <div className="slider_bg_box">
          <img
            src="https://images.unsplash.com/photo-1647468951241-be39bebc92aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add other carousel items here */}
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>

      {/* why section code  */}

      <section className="why_section layout_padding bg-opacity-50">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Shop With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="box">
              <div className="img-box">
                <img src="" alt="this is alternate" />
              </div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
            {/* Repeat the "Fast Delivery" section two more times */}
            <div className="box">
              <div className="img-box"></div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  {/* SVG path data */}
                </svg>
              </div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
