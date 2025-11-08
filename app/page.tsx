'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'expertise', 'articles', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Skip link for keyboard users */}
      <a href="#maincontent" className="skip-link">Skip to main content</a>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
      } border-b border-slate-200 dark:border-slate-800`}>
        <nav role="navigation" aria-label="Primary" className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white hover:scale-105 transition-transform cursor-pointer flex items-center gap-3">
            <a href="#home" aria-label="Home" className="hover:underline">Pitso Manyike</a>
            <span className="hidden md:inline text-sm text-slate-600 dark:text-slate-400">— Writer • Crypto, Finance & Business</span>
          </h1>
          <div className="flex gap-6">
            {['about', 'expertise', 'articles', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                aria-current={activeSection === item ? 'page' : undefined}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400" aria-hidden="true"></span>
                )}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="maincontent" className="max-w-6xl mx-auto px-6 py-24">
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center max-w-4xl animate-fade-in">
            <div className="mb-8 inline-block animate-bounce-slow">
              <div
                role="img"
                aria-label="Logo: Pitso Manyike"
                title="Pitso Manyike"
                className="w-32 h-32 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                PM
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-up">
              Pitso Manyike
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-4 animate-slide-up animation-delay-200">
              Freelance Writer
            </p>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
              Crafting compelling narratives in cryptocurrency, finance, and business. 
              Transforming complex topics into engaging, accessible content.
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-slide-up animation-delay-600">
              <button onClick={() => setShowModal(true)} className="px-8 py-4 btn-accent rounded-full font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 duration-300">
                Get in Touch
              </button>
              <a href="#expertise" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-700 rounded-full font-semibold transition-all hover:border-blue-500 hover:scale-105 duration-300">
                View My Work
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
            <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              About Me
            </h3>
            {/* About card styled similarly to expertise cards */}
            <div className="expert-card card-entrance p-8 md:p-12">
              <div className="expert-head">
                <div className="expert-icon" style={{ background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} aria-hidden>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2"/>
                    <path d="M8 15s1-2 4-2 4 2 4 2" stroke="rgba(255,255,255,0.95)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9h.01M15 9h.01" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>Pitso Manyike</div>
                  <div className="expert-sub">Freelance Writer — Crypto, Finance & Business</div>
                </div>
              </div>

              <div className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>I write clear, practical, and engaging content about cryptocurrency, finance, and business. I focus on turning complex ideas into readable stories that deliver value to founders, investors, and curious readers.</p>
                <p className="mt-4">With hands-on experience running a small business, I blend theory with practice to create content that helps people act — whether that&apos;s understanding DeFi risks, building investor-ready narratives, or explaining market trends.</p>
              </div>

              <div className="skill-chips mt-6">
                {['Content Writing','SEO','Research','Copywriting','Technical Writing','Editing'].map(s => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <button onClick={() => setShowModal(true)} className="px-5 py-3 btn-accent rounded-lg font-semibold">Work with me</button>
                <a href="#contact" className="px-5 py-3 border rounded-lg">Contact</a>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Areas of Expertise
          </h3>
          <div className="expert-grid max-w-6xl mx-auto">
            {/* Cryptocurrency */}
            <div className="expert-card card-entrance" tabIndex={0}>
              <div className="expert-head">
                <div className="expert-icon" style={{ background: 'linear-gradient(90deg,#fb923c,#f97316)' }} aria-hidden>
                  {/* bitcoin-like icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v20" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 6.5c1.2.6 1.9 1.8 1.6 3.4-.3 1.8-1.9 3-3.8 3.6" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11c-1.2-.6-1.9-1.8-1.6-3.4C8 6 9.6 4.8 11.5 4.2" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="expert-title">Cryptocurrency</div>
                  <div className="expert-sub">Blockchain, DeFi & NFTs</div>
                </div>
              </div>
              <div className="expert-details">
                <p>In-depth analysis of blockchain technology, digital assets, DeFi protocols, and NFT market signals. I explain technical concepts simply and provide tradeoffs for builders and investors.</p>
                <div className="skill-chips">
                  <span className="skill-chip">Blockchain Analysis</span>
                  <span className="skill-chip">DeFi Research</span>
                  <span className="skill-chip">Tokenomics</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="/articles/defi-future" className="px-4 py-2 btn-accent rounded-md">Learn more</a>
                  <button onClick={() => setShowModal(true)} className="px-4 py-2 border rounded-md">Work with me</button>
                </div>
              </div>
            </div>

            {/* Finance */}
            <div className="expert-card card-entrance" tabIndex={0}>
              <div className="expert-head">
                <div className="expert-icon" style={{ background: 'linear-gradient(90deg,#34d399,#10b981)' }} aria-hidden>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18h18" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6 14v-6" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 14v-10" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 14v-4" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="expert-title">Finance</div>
                  <div className="expert-sub">Markets, strategy & portfolios</div>
                </div>
              </div>
              <div className="expert-details">
                <p>Coverage of market trends, portfolio construction, and investment strategies designed for clarity and practical decision-making.</p>
                <div className="skill-chips">
                  <span className="skill-chip">Market Analysis</span>
                  <span className="skill-chip">Investment Strategy</span>
                  <span className="skill-chip">Risk Management</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="/articles/investment-strategies-2025" className="px-4 py-2 btn-accent rounded-md">Learn more</a>
                  <button onClick={() => setShowModal(true)} className="px-4 py-2 border rounded-md">Hire me</button>
                </div>
              </div>
            </div>

            {/* Business */}
            <div className="expert-card card-entrance" tabIndex={0}>
              <div className="expert-head">
                <div className="expert-icon" style={{ background: 'linear-gradient(90deg,#60a5fa,#7c3aed)' }} aria-hidden>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16v12H4z" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10h8" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="expert-title">Business</div>
                  <div className="expert-sub">Startups, strategy & research</div>
                </div>
              </div>
              <div className="expert-details">
                <p>Stories and analysis that help founders and leaders understand market dynamics, scale effectively, and communicate strategy.</p>
                <div className="skill-chips">
                  <span className="skill-chip">Startup Growth</span>
                  <span className="skill-chip">Corporate Strategy</span>
                  <span className="skill-chip">Market Research</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="/articles/building-startup-digital-age" className="px-4 py-2 btn-accent rounded-md">Learn more</a>
                  <button onClick={() => setShowModal(true)} className="px-4 py-2 border rounded-md">Discuss project</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section id="articles" className="py-24">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/articles/defi-future" className="block">
              <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 h-full">
                <div className="h-48 bg-linear-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      Cryptocurrency
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    The Future of Decentralized Finance
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    Exploring how DeFi protocols are reshaping traditional finance and creating new opportunities for financial inclusion.
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>5 min read</span>
                    <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/articles/investment-strategies-2025" className="block">
              <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 h-full">
                <div className="h-48 bg-linear-to-br from-green-500 to-emerald-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      Finance
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Investment Strategies for 2025
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    A comprehensive guide to navigating market volatility and building a resilient investment portfolio.
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>7 min read</span>
                    <span className="text-green-600 dark:text-green-400 hover:underline font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/articles/building-startup-digital-age" className="block">
              <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 h-full">
                <div className="h-48 bg-linear-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      Business
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Building a Startup in the Digital Age
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    Key lessons from successful entrepreneurs on scaling businesses and navigating the modern startup landscape.
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>6 min read</span>
                    <span className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 opacity-60 cursor-not-allowed">
              <div className="h-48 bg-linear-to-br from-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Cryptocurrency
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Coming Soon
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  NFTs Beyond Art: Real-World Applications
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  Discovering innovative use cases for NFT technology in supply chain, identity verification, and more.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>8 min read</span>
                  <span className="text-orange-600 dark:text-orange-400 font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                  <a 
                    href="mailto:pitso@example.com" 
                    className="flex items-center justify-center gap-3 px-6 py-4 btn-accent rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <span className="text-2xl">📧</span>
                    <span>admin@pitsomanyike.co.za</span>
                  </a>
                
                <div className="flex gap-4 justify-center pt-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-xl">in</span>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-xl">𝕏</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-xl">⚙</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400"> 2025 Pitso Manyike. All rights reserved.</p>
        </div>
      </footer>
      {/* Modal markup */}
      {showModal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Contact popup">
          <div className="modal">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold mb-1">Hi — I&apos;m Pitso 👋</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">I turn complex crypto and finance topics into clear stories. How can I help?</p>
              </div>
              <div>
                <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Close popup">✕</button>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <a href="mailto:pitso@example.com?subject=Work%20Inquiry" className="inline-block px-5 py-3 btn-accent rounded-lg font-semibold">Email me</a>
              <a href="#contact" onClick={() => setShowModal(false)} className="inline-block px-5 py-3 border rounded-lg">See contact section</a>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Or drop a short brief — I usually reply within 48 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
