import React from 'react'

function Footer() {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
        {/* <!-- Section 1: About Us --> */}
        <div class="col-lg-3 col-md-6 mb-4">
          <h3 style={{fontFamily: 'Open Sans'}} className='text-danger'>PRIME-NEWS</h3>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Create Your Own Ad</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Advertise with Us</a></li>
            <li><a href="#">Archives</a></li>
          </ul>
          
        </div>
  
        {/* <!-- Section 2: Popular Categories --> */}
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Popular Categories</h5>
          <ul class="footer-links">
            <li><a href="#">Headlines</a></li>
            <li><a href="#">Sports News</a></li>
            <li><a href="#">Business News</a></li>
            <li><a href="#">India News</a></li>
            <li><a href="#">World News</a></li>
            <li><a href="#">Bollywood News</a></li>
          </ul>
        </div>
  
        {/* <!-- Section 3: Top Trends --> */}
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Top Trends</h5>
          <ul class="footer-links">
            <li><a href="#">Diwali 2024 Date</a></li>
            <li><a href="#">Flight Bomb Threats</a></li>
            <li><a href="#">Cricket Live Score</a></li>
            <li><a href="#">Cyclone Dana Odisha</a></li>
            <li><a href="#">Delhi AQI</a></li>
          </ul>
        </div>
  
        {/* <!-- Section 4: Trending Topics --> */}
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Trending Topics</h5>
          <ul class="footer-links">
            <li><a href="#">Diwali Wishes</a></li>
            <li><a href="#">Ahoi Ashtami 2024</a></li>
            <li><a href="#">Breast Cancer</a></li>
            <li><a href="#">Papaya Health Tips</a></li>
            <li><a href="#">Vicky Kaushal Movies</a></li>
          </ul>
        </div>
      </div>
  
  
      {/* <!-- Section 6: Living and Entertainment, Services --> */}
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Living and Entertainment</h5>
          <ul class="footer-links">
            <li><a href="#">ETimes</a></li>
            <li><a href="#">Travel Destinations</a></li>
            <li><a href="#">Cricbuzz.com</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Lifestyle</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Services</h5>
          <ul class="footer-links">
            <li><a href="#">CouponDunia</a></li>
            <li><a href="#">TechGig</a></li>
            <li><a href="#">TimesJobs</a></li>
            <li><a href="#">Bollywood News</a></li>
            <li><a href="#">Gadgets</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Latest News</h5>
          <ul class="footer-links">
            <li><a href="#">Woman in HC to wrest daughter custody...</a></li>
            <li><a href="#">'Ab kat unchalias' - counting for injured...</a></li>
            <li><a href="#">Mika Singh supports Salman Khan...</a></li>
            <li><a href="#">Ashwagandha for hair loss: How to use it...</a></li>
            <li><a href="#">We are trying to restore trust, says General...</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
        <h5>Follow Us On</h5>
          <div class="social-icons">
                                <a href="https://www.facebook.com" className="mx-2 facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com" className="mx-2 twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com" className="mx-2 youtube"><i className="fab fa-youtube"></i></a>
                                <a href="#rss" className="mx-2 rss"><i className="fas fa-rss"></i></a>
                                <a href="https://www.instagram.com" className="mx-2 instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com" className="mx-2 linkedin"><i className="fab fa-linkedin-in"></i></a>
          </div>
          </div>
      </div>
  
  
      {/* <!-- Copyright Section --> */}
      <div class="row" style={{borderTop:'1px solid black'}}>
        <div class="col-lg-12 text-center copyright mt-2">
          <p>Copyright © 2024 Prime-News. All rights reserved. For reprint rights: <a className='text-light'
          style={{textDecoration:'none'}} href="#">PM Syndication Service</a></p>
        </div>
      </div>
    </div>
  </footer>
  
  
  )
}

export default Footer