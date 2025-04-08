import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import aboutImage from "../images/AboutUs.webp";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import icon1 from "../images/lock.png";
import icon2 from "../images/email.png";
import icon3 from "../images/user.png";

function HomePage() {
  const div = document.createElement("div");
  div.classList.add("home_content");

  div.innerHTML = `
    <!-- Hero Slideshow -->
    <div class="fullscreen-slideshow">
      <div class="slide fade"><img src="${slide1}" /></div>
      <div class="slide fade"><img src="${slide2}" /></div>
      <div class="slide fade"><img src="${slide3}" /></div>
      <div class="slide-overlay">
        <h2 class="overlay-text">Welcome to ShelfQuest Digital Library!</h2>
      </div>
    </div>

    <!-- About Us Preview -->
    <section class="about_preview" style="background-image: url('${aboutImage}')">
      <div class="overlay_box">
        <h3>About ShelfQuest</h3>
        <p>Access thousands of books on demand. Education made easy and engaging for everyone.</p>
        <button onclick="navigateTo('about')" class="btn-primary">Learn More</button>
      </div>
    </section>

    <!-- Value Icons Section -->
    <section class="value_section">
      <div class="value_card">
        <img src="${icon1}" alt="Secure" />
        <h4>Secure Access</h4>
        <p>Your data and reading experience are always safe.</p>
      </div>
      <div class="value_card">
        <img src="${icon2}" alt="Support" />
        <h4>24/7 Support</h4>
        <p>We're always here to help you out.</p>
      </div>
      <div class="value_card">
        <img src="${icon3}" alt="Users" />
        <h4>1000+ Users</h4>
        <p>Trusted by a growing global community.</p>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials_section">
      <h3>What Our Users Say</h3>
      <div class="testimonial_cards">
        <div class="testimonial_card">
          <img src="${user1}" loading="lazy" alt="User 1" />
          <p>"ShelfQuest made learning exciting again. I love the interface!"</p>
          <h4>– Alicia M.</h4>
        </div>
        <div class="testimonial_card">
          <img src="${user2}" loading="lazy" alt="User 2" />
          <p>"Even my kids love it! ShelfQuest makes learning fun and easy."</p>
          <h4>– David’s Parent</h4>
        </div>
        <div class="testimonial_card">
          <img src="${user3}" loading="lazy" alt="User 3" />
          <p>"I’ve found books here that I couldn’t get anywhere else. Incredible platform!"</p>
          <h4>– Marcus O.</h4>
        </div>
      </div>
    </section>

    <!-- Mission & Team -->
    <section class="team_section" style="background-image: url('${slide3}')">
      <div class="overlay_box">
        <h3>Our Mission & Vision</h3>
        <p>We envision a world where knowledge is free, digital, and always within reach.</p>
        <button onclick="navigateTo('about')" class="btn-primary">Meet the Team</button>
      </div>
    </section>
  `;

  let slideIndex = 0;
  const slides = div.querySelectorAll(".slide");

  function showSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }

  showSlides();
  return div;
}

export default HomePage;
