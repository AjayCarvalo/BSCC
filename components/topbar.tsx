import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Topbar = () => {
  return (
    <section className="bg-black text-white w-full px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Social Media Icons */}
        <div className="flex space-x-4 mb-3 md:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaInstagram />
          </a>
        </div>

        {/* Right: Important Links */}
        <div className="flex flex-col md:flex-row gap-3 font-bold underline items-center">
          <a href="https://braywoodcc.play-cricket.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            Play-Cricket
          </a>
          <a href="https://tvlcricket.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            TVCL
          </a>
          <a href="https://www.serioussport.co.uk/teamstores/braywood-cricket-club" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            Serious Cricket
          </a>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
