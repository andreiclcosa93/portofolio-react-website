import React from "react";

const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
        <div className="text-center">
            <h1>contact me.</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <input 
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                    />

                    <input 
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                    />

                    <div className="line"></div>
                    <input 
                        id="phone"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                    />
                    <div className="line"></div>
                    <input 
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                    />
                    <div className="line"></div>
                </div>

                <div className="col-md-6 col-xs-12">
                    <textarea
                        id="texttarea"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="description"
                    ></textarea>
                   
                    <div className="line"></div>
                    <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts;