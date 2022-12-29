import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";


const Footer = () => {
  return (
    <div id="footer" className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>City st 200 office #32</p>
                    </div>

                    <div className="d-flex">
                        <a href="tel: 0234-444-444">+(04) 72222222</a>
                    </div>

                    <div className="d-flex">
                        <p>AANdrei@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav" href="/">Home</a><br />
                            <a className="footer-nav" href="/">About me</a><br />
                            <a className="footer-nav" href="/">Services</a><br />
                        </div>

                        <div className="col">
                            <a className="footer-nav" href="/">Experience</a><br />
                            <a className="footer-nav" href="/">Portofolio</a><br />
                            <a className="footer-nav" href="/">Contacts</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                            url={"https://www.facebook.com/"}
                            quote={"FullStack Developer"}
                            hashtag="#JsReact"
                        >
                            <FacebookIcon className="mx-3" size={36} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={"https://twitter.com/"}
                            quote={"FullStack Developer"}
                            hashtag="#JsReact"
                        >
                            <TwitterIcon className="mx-3" size={36} />
                        </TwitterShareButton>

                        <RedditShareButton
                            url={"https://www.reddit.com/"}
                            quote={"FullStack Developer"}
                            hashtag="#JsReact"
                        >
                            <RedditIcon className="mx-3" size={36} />
                        </RedditShareButton>

                        <LinkedinShareButton
                            url={"https://www.Linkedin.com/"}
                            quote={"FullStack Developer"}
                            hashtag="#JsReact"
                        >
                            <LinkedinIcon className="mx-3" size={36} />
                        </LinkedinShareButton>
                    </div>
                    <p className="pt-3 text-center"> Copyright &copy; 
                    {new Date().getFullYear()}&nbsp;AANdrei. | All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;