"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Branding & Description */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Orangepoint Software</h2>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              We build modern web and mobile applications tailored to your business needs. Delivering quality and performance.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <motion.a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 text-muted-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 text-muted-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 text-muted-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 text-muted-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Home</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Services</a></li>
              <li><a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Portfolio</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">About Us</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Web Development</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Mobile Apps</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">UI/UX Design</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">AI Website Fix</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Consultancy</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@codexnav.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@codexnav.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">+1 234 567 890</a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">San Francisco, CA</span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-border px-4 md:px-16 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orangepoint Software. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
