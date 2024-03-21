import React from "react";

function Footer() {
  return (
    <div>
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
    </div>
  );
}

export default Footer;
