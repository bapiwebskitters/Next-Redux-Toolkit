import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  submitContactForm,
  clearMessages,
} from "../redux/features/contact/contactSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactValidationSchema } from "../Validation/validationSchema";
import { toast } from "react-toastify";

const ContactSection: React.FC = () => {
  const settings = {
    email: "admin@example.com",
    phone: "+919093595084",
    address: "A108 Adam Street,Kolkata,West Bengal,India 700121",
    map_url:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus",
  };

  const dispatch: AppDispatch = useDispatch();
  const { isLoading, successMessage, errorMessage } = useSelector(
    (state: RootState) => state.contact
  );

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }

    const timer = setTimeout(() => {
      dispatch(clearMessages());
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage, errorMessage, dispatch]);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(submitContactForm(values));
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit{" "}
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{settings.address}</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>{settings.phone}</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>{settings.email}</p>
                </div>
              </div>

              <iframe
                src={settings.map_url}
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <Formik
              initialValues={initialValues}
              validationSchema={contactValidationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">
                        Your Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">
                        Your Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email-field"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">
                        Subject
                      </label>
                      <Field
                        type="text"
                        name="subject"
                        id="subject-field"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="subject"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">
                        Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        rows={10}
                        id="message-field"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        disabled={isLoading}
                      >
                        { isLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>{" "}
                            Submitting...
                            {/* <span className="dot-flashing"></span> */}
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
