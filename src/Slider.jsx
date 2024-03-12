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

      {/* footer section */}
      <footer className="site-footer bg-gray-900 py-12 md:py-0 text-sm leading-6 text-gray-400">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-8">
              <h6 className="text-white text-lg uppercase mb-2 mt-4">Abouts</h6>
              <p className="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and
                Algorithm.
              </p>
            </div>

            <div className="w-full md:w-1/4 mt-4 md:mt-0">
              <h6 className="text-white text-lg uppercase mb-2">Categories</h6>
              <ul className="footer-links">
                <li>
                  <a
                    href="http://scanfcode.com/category/c-language/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    C
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/front-end-development/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    UI Design
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/back-end-development/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    PHP
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/java-programming-language/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Java
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/android/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Android
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/templates/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 mt-4 md:mt-0">
              <h6 className="text-white text-lg uppercase mb-2">Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a
                    href="http://scanfcode.com/about/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/contact/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/contribute-at-scanfcode/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/privacy-policy/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/sitemap/"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-t border-gray-700 my-6 md:hidden" />
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-2/3"></div>

            <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center md:justify-end">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Slider;
