import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaMagic } from 'react-icons/fa';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📬' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fa-github', href: profile?.social?.github, color: 'hover:text-white' },
    { name: 'LinkedIn', icon: 'fa-linkedin', href: profile?.social?.linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: 'fa-twitter', href: profile?.social?.twitter, color: 'hover:text-sky-400' },
    { name: 'Email', icon: 'fa-envelope', href: `mailto:${profile?.email}`, color: 'hover:text-red-400' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: profile?.email },
    { icon: FaPhone, label: 'Phone', value: profile?.phone },
    { icon: FaMapMarkerAlt, label: 'Location', value: profile?.location },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Node.js', icon: '📦' },
    { name: 'Python', icon: '🐍' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'Vite', icon: '⚡' },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10 bg-gradient-to-t from-dark-950 via-dark-950 to-dark-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 35, repeat: Infinity }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 500 + 500 }}
            animate={{ y: -100, opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaRocket />
              </motion.div>
              <div>
                <h3 className="text-2xl font-black gradient-text">
                  {profile?.name?.split(' ')[0]}.dev
                </h3>
                <p className="text-xs text-primary-400 font-medium">
                  {profile?.title}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building digital experiences that matter. Specialized in AI training,
              scalable systems, and full-stack development.
            </p>

            {/* Social Links with Orbit Effect */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color} relative group overflow-hidden`}
                  whileHover={{ scale: 1.15, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <i className={`fa-brands ${link.icon} text-xl relative z-10`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-primary-400">🔗</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-primary-400">📬</span> Contact
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-300">
                    <info.icon className="text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">{info.label}</p>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <FaMagic className="text-primary-400" /> Stay Connected
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe to get updates on new projects, AI insights, and tech opportunities.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 pr-12"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope className="text-sm" />
                </motion.button>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Subscribe Now 🚀</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          className="relative my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <motion.div
              className="px-6 bg-dark-950"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">🦄</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="gradient-text font-semibold">{profile?.name}</span>.
              All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Made with <FaHeart className="inline text-red-500 mx-1 animate-pulse" /> and{' '}
              <span className="text-amber-500">☕</span> •
              Powered by <span className="text-primary-400">React</span> +{' '}
              <span className="text-cyan-400">Supabase</span>
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group w-14 h-14 rounded-xl glass flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-500 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-purple-500/0 group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-300" />
            <FaArrowUp className="group-hover:translate-y-[-4px] transition-transform relative z-10" />
          </motion.button>
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          className="mt-8 pt-6 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-xs mb-4">Built with modern technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                className="px-4 py-2 rounded-full glass text-xs font-medium text-gray-400 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#fff' }}
              >
                {tech.icon} {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-6 text-center text-gray-600 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            🌍 Optimized for modern browsers • ♿ Accessible • 📱 Responsive
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
