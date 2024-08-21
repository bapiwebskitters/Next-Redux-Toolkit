"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import Swiper from "swiper";

const TestimonialSection: React.FC = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            {/* Testimonial Item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  src="/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt="Saul Goodman" width={1000} height={500} 
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* End Testimonial Item */}

            {/* Add more testimonial items here */}
            {/* Example for another testimonial */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  src="/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt="Sara Wilsson" width={1000} height={500} 
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
