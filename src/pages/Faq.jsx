import logo from '../assets/images/logo.png'
import faqsimage from '../assets/images/faqs-image.jpg'
import services01 from '../assets/images/services-01.jpg'
import services02 from '../assets/images/services-02.jpg'
import services03 from '../assets/images/services-03.jpg'
import services04 from '../assets/images/services-04.jpg'
function Faq(){
    return(
        <>

  {/* <!-- ***** Pre-Header Area Start ***** --> */}
  <div className="pre-header" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- ***** Pre-Header Area End ***** -->

  <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <img src={logo} alt="img" style={{maxwidth :"112px"}}/>
                    </a>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="faq.html">FAQs</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="contact.html">Contact</a></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}

  <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 align-self-center">
          <div className="caption  header-text">
            <h6>SEO DIGITAL AGENCY</h6>
            <div className="line-dec"></div>
            <h4>Most Frequently Asked <em>Questions</em> Here <em>?</em></h4>
          </div>
        </div>
        <div className="col-lg-5">
          <img src={faqsimage} alt="img"/>
        </div>
      </div>
    </div>
  </div>

  <div className="happy-steps">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
        </div>
        <div className="col-lg-12">
          <div className="steps">
            <div className="row">
              <div className="col-lg-3">
                <div className="item">
                  <img src={services01} alt="" style={{maxwidth: "66px" ,borderradius: "50%", margin: "0" }}/>
                  <h4>Project Introduction</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item">
                  <img src={services02} alt="" style={{maxwidth: "66px" ,borderradius: "50%" ,margin: "0" }}/>
                  <h4>Work Development</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item">
                  <img src={services03} alt="" style={{maxwidth: "66px", borderradius: "50%" ,margin: "0" }}/>
                  <h4>Data Analysis</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item last-item">
                  <img src={services04} alt="" style={{maxwidth: "66px" ,borderradius: "50%",margin: "0" }}/>
                  <h4>Project Finishing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="most-asked section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Most <em>Frequently</em> Asked <span>Questions</span> ?</h2>
            <div className="line-dec"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="accordions is-first-expanded">
            <article className="accordion">
              <div className="accordion-head">
                  <span>Sartorial Butcher Humblebrag</span>
                  <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                  </span>
              </div>
              <div className="accordion-body">
                  <div className="content">
                      <p>Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a free download provided by TemplateMo. There are 3 HTML pages, <a href="index.html">Home</a>, <a href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.</p>
                  </div>
              </div>
          </article>
          <article className="accordion">
            <div className="accordion-head">
                <span>Jean Shorts Microdosing</span>
                <span className="icon">
                    <i className="icon fa fa-chevron-right"></i>
                </span>
            </div>
            <div className="accordion-body">
                <div className="content">
                    <p>You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.
                    <br/><br/>
                    Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch.</p>
                </div>
            </div>
          </article>
          <article className="accordion">
            <div className="accordion-head">
                <span>Waistcoat Aesthetic Polaroid</span>
                <span className="icon">
                    <i className="icon fa fa-chevron-right"></i>
                </span>
            </div>
            <div className="accordion-body">
                <div className="content">
                    <p>Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch.<br/><br/>
                    Fingerstache cronut taxidermy, echo park quinoa tumblr activated charcoal before they sold out.</p>
                </div>
            </div>
          </article>
          <article className="accordion">
            <div className="accordion-head">
                <span>Dolores Accordion HTML5</span>
                <span className="icon">
                    <i className="icon fa fa-chevron-right"></i>
                </span>
            </div>
            <div className="accordion-body">
                <div className="content">
                  <p>Pickled succulents bitters  belly direct trade, shaman iceland raw denim kombucha cray offal. Food truck swag hell of tumblr poutine tilde live-edge shorts microdosing fixie succulents, viral everyday carry tattooed.</p>
                </div>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="get-free-quote">
          <form id="free-quote" method="submit" role="search" action="#">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Get a <em>Free Quote</em> Now</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="website" name="website" id="website" placeholder="Website URL" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="phone-number" name="phone-number" id="phone-number" placeholder="Phone Number" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="full-name" name="full-name" id="full-name" placeholder="Full Name" autocomplete="on" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="orange-button">Get Your Free Quote</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  </div>

  <div className="cta section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h4>Are You Ready To Work &amp; Develop With Us ?<br/>Don't Hesitate &amp; Contact Us !</h4>
        </div>
        <div className="col-lg-4">
          <div className="main-button">
            <a href="#">Contact Us Now!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
export default Faq;