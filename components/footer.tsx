import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900 p-4 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* First Section: Logo and Address */}
        <div>
          <div className="text-2xl font-bold mb-4">Braywood Cricket Club</div>
          <p className="text-sm text-left mx-auto">
            Oakley Green Road <br />
            Fifield Windsor SL4 4QF <br />
          </p>
        </div>

        {/* Second Section: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/" className="text-sm hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="text-sm hover:text-blue-400">About</a></li>
            <li><a href="/services" className="text-sm hover:text-blue-400">Services</a></li>
            <li><a href="/contact" className="text-sm hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Third Section: Join Newsletter */}
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-white border border-white w-full mb-4 rounded"
            />
            <button className="bg-red-900 border border-white text-white p-2 w-full rounded hover:bg-red-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
