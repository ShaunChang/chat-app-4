import React,{useState} from "react";
import Carousel from "../components/Carousel";

function index(props) {
	const [content,setContent] = useState('')

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  var urlencoded = new URLSearchParams();
  urlencoded.append("appkey", "XYS8X5K5CZ3D53STDPDM2CQJZS6VR3JP");
  urlencoded.append("url", "https://mp.weixin.qq.com/s/Q_mv_qLXCVLlroQsacisbw");
  urlencoded.append("contentwithhtml", "false");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  fetch("https://api.gugudata.com/news/fetchcontent", requestOptions)
    .then((response) => response.text())
    .then((result) => {setContent(JSON.parse(result).Data.Content)})
    .catch((error) => console.log("error", error));

  return (
    <div>
      <header>
        <div
          id="navigation"
          className="navbar navbar-inverse navbar-fixed-top default"
          role="navigation"
        >
          <div className="container">
			<div>
			<div dangerouslySetInnerHTML={{ __html: content }} />;
			</div>
            <iframe
              src="https://mp.weixin.qq.com/s/Q2mVvPo6-d82Fbq2DRjXCQ"
              style={{ width: "100%", height: "500px" }}
              title="Preview"
            />

            <div className="navbar-header">
              {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button> */}
              <a className="navbar-brand" href="index.html">
                Muti-Character Chat
              </a>
            </div>

            <div className="navigation">
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <nav>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="current">
                      <a href="#intro">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#works">Works</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <section id="intro"> */}
      {/* <ul id="slippry-slider">
			  <li>
				<a href="#slide1"><img src="assets/img/slide/1.jpg" alt="Welcome to Groovin!" /></a>
			  </li>
			  <li>
				<a href="#slide2"><img src="assets/img/slide/2.jpg"  alt="This is an awesome bootstrap template" /></a>
			  </li>
			  <li>
				<a href="#slide3"><img src="assets/img/slide/3.jpg" alt="Check it out, you are going to <span className='red'>♥</span> it :)" /></a>
			  </li>
			</ul> */}
      {/* <Carousel /> */}
      {/* </section> */}

      <Carousel />

      <section id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h3>
                  <span>About us</span>
                </h3>
              </div>
              <div className="sub-heading">
                <p>
                  Creating a visual language around the beliefs of the brands we
                  work with.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="team-box">
                <img
                  src="assets/img/dummies/team1.jpg"
                  alt=""
                  className="img-responsive"
                />
                <div className="roles">
                  <h5>
                    <strong>Baby Stewards Jr</strong>
                  </h5>
                  <p>CEO - Founder</p>
                  <ul className="social-profile">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-box">
                <img
                  src="assets/img/dummies/team2.jpg"
                  alt=""
                  className="img-responsive"
                />
                <div className="roles">
                  <h5>
                    <strong>Tommy Kreunichev</strong>
                  </h5>
                  <p>Lead designer</p>
                  <ul className="social-profile">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-box">
                <img
                  src="assets/img/dummies/team3.jpg"
                  alt=""
                  className="img-responsive"
                />
                <div className="roles">
                  <h5>
                    <strong>Moriella Maccini</strong>
                  </h5>
                  <p>Customer support</p>
                  <ul className="social-profile">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-box">
                <img
                  src="assets/img/dummies/team4.jpg"
                  alt=""
                  className="img-responsive"
                />
                <div className="roles">
                  <h5>
                    <strong>Brian James Scoothie</strong>
                  </h5>
                  <p>Coffee maker</p>
                  <ul className="social-profile">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="section gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h3>
                  <span>Recent works</span>
                </h3>
              </div>
              <div className="sub-heading">
                <p>
                  We have a history of doing what our name implies, creating a
                  visual language around the beliefs of the brands we work with.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="grid effect" id="grid">
                <li>
                  <a
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                    href="assets/img/portfolio/1.jpg"
                  >
                    <img src="assets/img/portfolio/1.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/2.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/3.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/3.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/4.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/4.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/5.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/5.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/6.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/6.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/7.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/7.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/8.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/8.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/9.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/9.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/10.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/10.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/11.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/11.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/12.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/12.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/13.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/13.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="assets/img/portfolio/14.jpg"
                    className="fancybox"
                    data-fancybox-group="gallery"
                    title="Portfolio name"
                  >
                    <img src="assets/img/portfolio/14.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h3>
                  <span>Get in touch</span>
                </h3>
              </div>
              <div className="sub-heading">
                <p>
                  Lorem ipsum dolor sit amet, mutat paulo simul per no, assum
                  fastidii vituperata eam no.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <i className="icon-envelope"></i>
                <strong>Contact form</strong>
              </h4>
              <p>
                Want to work with us or just want to say hello? Don't hesitate
                to get in touch!
              </p>

              <div className="cform" id="contact-form">
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <form
                  action="contact/contact.php"
                  method="post"
                  role="form"
                  className="contactForm"
                >
                  <div className="form-group">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="maxlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <label for="email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <label for="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="maxlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                    ></textarea>
                    <div className="validation"></div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-theme pull-left"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="clear"></div>
            </div>
            <div className="col-md-6">
              <h4>Find our location</h4>
              <p>View from google map</p>

              <div id="section-map" className="clearfix">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="verybottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aligncenter">
                  <ul className="social-network social-circle">
                    <li>
                      <a href="#" className="icoRss" title="Rss">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoFacebook" title="Facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoTwitter" title="Twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoGoogle" title="Google +">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoLinkedin" title="Linkedin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="aligncenter">
                  <p>
                    &copy;2015 Groovin - All right reserved | Designed by{" "}
                    <a href="http://bootstraptaste.com">BootstrapTaste</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default index;
