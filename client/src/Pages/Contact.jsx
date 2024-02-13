import React from "react";

const Contact = () => {
  return (
    <div className="h">
      <h1 className="text-3xl font-bold mt-8">Contact us</h1>
      <div>
        <div>
          <img
            src="https://thapatechnical.site/images/support.png"
            alt="contact us"
          />
        </div>

        <form className="space-y-3 py-10">
          <div className="flex flex-col">
            <label className="pb-3">Name</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-col">
            <label className="pb-3" htmlFor="email">
              Email
            </label>
            <input type="email" />
          </div>
          <div className="flex flex-col">
            <label className="pb-3" htmlFor="message">
              Message
            </label>
            <textarea rows="8" cols="50" type="fieldtext" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
