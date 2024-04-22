import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/1c.jpg" alt="1c" style={{ width: "95%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Delight market has proudly served clients as a qualified
            intermediaries with precison and excellence for over 2 years. we
            often personally meet the clients.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.Delight_Market.com
          </p>
          <p className="mt-3">
            <> </>
            <BiPhoneCall /> : +91 9560657510
            <> </>
            ||
            <> </>
            <BiPhoneCall /> : +91 8329463537
          </p>
          <p className="mt-3">
            <BiSupport /> : 00891-2454-5639 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
