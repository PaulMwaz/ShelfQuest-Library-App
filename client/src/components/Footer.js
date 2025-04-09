const Footer = () => {
  return `
      <footer class="footer">
        <div class="footer-columns">
          <div class="footer-about">
            <h3>ShelfQuest</h3>
            <p>
              Empowering learners everywhere with free, fast, and secure access to digital knowledge.
              Discover books that spark curiosity, growth, and innovation.
            </p>
          </div>
          <div class="footer-contact">
            <h4>Contact</h4>
            <p>P.O. Box 45678<br/>Nairobi, Kenya</p>
            <p><a href="mailto:support@shelfquest.org">support@shelfquest.org</a></p>
            <p>+254 727-383-15</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#" onclick="navigateTo('about')">About</a></li>
              <li><a href="#" onclick="navigateTo('library')">Library</a></li>
              <li><a href="#" onclick="navigateTo('login')">Login</a></li>
              <li><a href="#" onclick="navigateTo('register')">Register</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
            <span class="copyright">© 2025 ShelfQuest. All rights reserved</span>
            <span class="built-with-love"> | Built with ❤️ for the world of learners.</span>
        </div>
      </footer>
    `;
};

export default Footer;
