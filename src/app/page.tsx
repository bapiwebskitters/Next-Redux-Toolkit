import React from "react";
import Image from 'next/image';
import ClientsSection from "@/components/ClientsSection";
import WhyUsSection from "@/components/WhyUsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero section dark-background">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="zoom-out"
            >
              <h1>Better Solutions For Your Business</h1>
              <p>
                We are team of talented designers making websites with Bootstrap
              </p>
              <div className="d-flex">
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src="/img/hero-img.png"
                className="img-fluid animated"
                alt="demo" width={1000} height={500} 
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Hero Section --> */}

      {/* <!-- Clients Section --> */}
      <ClientsSection />
      {/* <!-- /Clients Section --> */}

      {/* <!-- About Section --> */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea commodo</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.{" "}
              </p>
              <a href="#" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /About Section --> */}

      {/* <!-- Why Us Section --> */}
      <WhyUsSection />
      {/* <!-- /Why Us Section --> */}

      {/* <!-- Skills Section --> */}
      <SkillsSection />
      {/* <!-- /Skills Section --> */}

      {/* <!-- Services Section --> */}
      <section id="services" className="services section light-background">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-activity icon"></i>
                </div>
                <h4>
                  <a href="" className="stretched-link">
                    Lorem Ipsum
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles icon"></i>
                </div>
                <h4>
                  <a href="" className="stretched-link">
                    Sed ut perspici
                  </a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week icon"></i>
                </div>
                <h4>
                  <a href="" className="stretched-link">
                    Magni Dolores
                  </a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast icon"></i>
                </div>
                <h4>
                  <a href="" className="stretched-link">
                    Nemo Enim
                  </a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Services Section --> */}

      {/* <!-- Call To Action Section --> */}
      <section
        id="call-to-action"
        className="call-to-action section dark-background"
      >
        <Image src="/img/cta-bg.jpg" alt="" width={1000} height={500} />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-xl-9 text-center text-xl-start">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-xl-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Call To Action Section --> */}

      {/* <!-- Portfolio Section --> */}
      <section id="portfolio" className="portfolio section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Card</li>
              <li data-filter=".filter-branding">Web</li>
            </ul>
            {/* <!-- End Portfolio Filters --> */}

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-1.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    title="App 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-2.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-2.jpg"
                    title="Product 1"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-3.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    title="App 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-5.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    title="Product 2"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-7.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    title="App 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-8.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <Image
                  src="/img/masonry-portfolio/masonry-portfolio-9.jpg"
                  className="img-fluid"
                  alt="" width={1000} height={500} 
                />
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="/img/masonry-portfolio/masonry-portfolio-9.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}
            </div>
            {/* <!-- End Portfolio Container --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Portfolio Section --> */}

      {/* <!-- Team Section --> */}
      <section id="team" className="team section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="" width={1000} height={500} 
                  />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/img/team/team-2.jpg"
                    className="img-fluid"
                    alt="" width={1000} height={500} 
                  />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/img/team/team-3.jpg"
                    className="img-fluid"
                    alt="" width={1000} height={500} 
                  />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/img/team/team-4.jpg"
                    className="img-fluid"
                    alt="" width={1000} height={500} 
                  />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Team Section --> */}

      {/* <!-- Pricing Section --> */}
      <section id="pricing" className="pricing section light-background">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="pricing-item">
                <h3>Free Plan</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-item featured">
                <h3>Business Plan</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="pricing-item">
                <h3>Developer Plan</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Pricing Section --> */}

      {/* <!-- Testimonials Section --> */}
      <TestimonialSection />
      {/* <!-- /Testimonials Section --> */}

      {/* <!-- Faq 2 Section --> */}
      <section id="faq-2" className="faq-2 section light-background">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-container">
                <div
                  className="faq-item faq-active"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                  <div className="faq-content">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>
                    Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>
                    Dolor sit amet consectetur adipiscing elit pellentesque?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Faq 2 Section --> */}

      {/* <!-- Contact Section --> */}
      {/* <ContactSection /> */}
      {/* <!-- /Contact Section --> */}
    </>
  );
}
