'use client';

import { motion } from 'framer-motion';

const shopLinks = ['New Arrivals', 'Handbags', 'Eyewear', 'Jewelry', 'Scarves', 'Belts'];
const companyLinks = ['About', 'Lookbook', 'Careers', 'Press', 'Sustainability'];
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-yellow/20 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-14 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#"
              className="font-poppins font-black italic text-brand-yellow text-3xl md:text-4xl tracking-tighter block mb-4"
              whileHover={{ scale: 1.02 }}
              data-hover
            >
              AURUM
            </motion.a>
            <p className="font-poppins text-white/30 text-sm leading-relaxed max-w-xs">
              Curated women&apos;s accessories. Handpicked for the bold. Making every detail count since 2020.
            </p>
            {/* Social Links */}
            <div className="flex gap-5 mt-6">
              {['IG', 'TT', 'Pinterest'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="font-poppins font-black text-xs tracking-widest text-white/30 hover:text-brand-yellow transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  data-hover
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-poppins font-black text-[10px] tracking-[0.35em] text-brand-yellow uppercase mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-poppins text-white/40 text-sm hover:text-white transition-colors duration-200"
                    data-hover
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-black text-[10px] tracking-[0.35em] text-brand-yellow uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-poppins text-white/40 text-sm hover:text-white transition-colors duration-200"
                    data-hover
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-black text-[10px] tracking-[0.35em] text-brand-yellow uppercase mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-poppins text-white/40 text-sm hover:text-white transition-colors duration-200"
                    data-hover
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-2">
          <p className="font-poppins text-white/20 text-xs tracking-widest text-center">
            © 2025 AURUM. ALL RIGHTS RESERVED.
          </p>
          <span className="text-brand-yellow text-xs hidden md:inline">✦</span>
          <p className="font-poppins text-white/10 text-xs tracking-widest">
            DESIGNED WITH INTENTION
          </p>
        </div>
      </div>
    </footer>
  );
}
