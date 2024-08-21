"use client"

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFaqs } from "../redux/features/faq/faqSlice";
import { AppDispatch, RootState } from "../redux/store";
import Image from "next/image";
// import { selectFaqError, selectFaqs, selectFaqStatus } from "../redux/features/faq/fawSelectors";

const WhyUsSection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // Accessing state thorough the selectors
  // const faqs = useSelector(selectFaqs);
  // const status = useSelector(selectFaqStatus);
  // const error = useSelector(selectFaqError);
  // Accessing state directly from the redux store
  const { faqs, status, error } = useSelector((state: RootState) => state.faq);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFaqs());
    }
  }, [dispatch, status]);

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setActiveFaqIndex(index === activeFaqIndex ? null : index);
  };

  if (status === "loading") {
    return <p>Loading FAQs...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <section
      id="why-us"
      className="section why-us light-background"
      data-builder="section"
    >
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div
              className="content px-xl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <span>Eum ipsam laborum deleniti </span>
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>

            <div
              className="faq-container px-xl-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`faq-item ${
                    activeFaqIndex === index ? "faq-active" : ""
                  }`}
                >
                  <h3 onClick={() => toggleFaq(index)}>
                    <span>{`0${index + 1}`}</span> {faq.question}
                  </h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i
                    className={`faq-toggle bi bi-chevron-${
                      activeFaqIndex === index ? "down" : "right"
                    }`}
                    onClick={() => toggleFaq(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 why-us-img">
            <Image
              src="/img/why-us.png"
              className="img-fluid"
              alt="" width={1000} height={500} 
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
