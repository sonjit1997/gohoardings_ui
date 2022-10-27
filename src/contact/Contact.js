import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section className="text text-center p-3">
        <h1 className="heading">GET IN TOUCH</h1>
        <h4>How can we help you? We'd love to hear from you:</h4>
      </section>
      <section className="text pt-5 ps-5 ">
        <div className="container  ">
          <div className="row ">
            <div className="col-md-6">
              <div className="main d-flex">
                <h2 className="text-warning pe-2 ">Come</h2>
                <h2 className="text-black"> to see us!</h2>
              </div>
              <div>
                <p className="address text-center">
                  GOHOARDINGS Solutions LLP
                  <br />
                  E-82,3rd Floor,Sector 06
                  <br />
                  Noida,20130(U.P.)
                </p>
                <div>
                  <img src="./image/cnd.png" className="card-img pt-5 mb-5" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex ps-4">
                <h2 className="text-black pe-2">Let's</h2>
                <h2 className="text-warning"> talk</h2>
              </div>  
              <div>
                <p className="text-center">
                  To request a quote or want to meet up for coffe,
                  <br />
                  contact us directly or fill out the form and we <br />
                  will get back to you soon.
                </p>
              </div>
              <div className="card bg-light p-3">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Your name
                    </label>
                    <input type="email" className="form-control" />
                    {/* <div id="emailHelp" class="form-text">
                     Error message
                    </div> */}
                  </div>
                
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Your email
                    </label>
                    <input type="email" className="form-control" />
                    {/* <div id="emailHelp" class="form-text">
                     Error message
                    </div> */}
                  </div>
                  <label for="exampleInputEmail1" className="form-label">
                      Your message
                    </label>
                  <textarea
                    className="form-control mb-3"
                    rows="5"
                    cols="50"
                    placeholder="Type your message here..."
                  ></textarea>
                  <div className="d-grid">
  <button className="btn  btn-warning mt-2">
              SEND MESSAGE
            </button>
            </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
