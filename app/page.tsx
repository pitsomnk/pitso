'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
      } border-b border-slate-200 dark:border-slate-800`}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white hover:scale-105 transition-transform cursor-pointer">
            Pitso Manyike
          </h1>
          <div className="flex gap-6">
            {['about', 'expertise', 'articles', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                )}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center max-w-4xl animate-fade-in">
            <div className="mb-8 inline-block animate-bounce-slow">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
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
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 duration-300">
                Get in Touch
              </a>
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I&apos;m a passionate freelance writer who loves diving deep into topics that fascinate me—from 
                the revolutionary world of cryptocurrency to the intricacies of finance and the dynamics of business. 
                Writing isn&apos;t just my profession; it&apos;s how I explore, learn, and share knowledge about the subjects I care about most.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Drawing from my experience in running a small business, I understand the real-world challenges that 
                entrepreneurs and companies face. This hands-on perspective allows me to create content that goes beyond 
                theory—I craft narratives that provide practical value, actionable insights, and genuine understanding. 
                Whether it&apos;s exploring DeFi protocols, analyzing market trends, or sharing business strategies, my goal 
                is to help others navigate complex topics with clarity and confidence.
              </p>
              
              {/* Skills */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {['Content Writing', 'SEO Optimization', 'Research', 'Copywriting', 'Technical Writing', 'Editing'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-3xl">₿</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Cryptocurrency
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                In-depth analysis of blockchain technology, digital assets, DeFi, NFTs, and the evolving 
                crypto ecosystem.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Blockchain Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> DeFi Protocols
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> NFT Market Trends
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-3xl">💹</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Finance
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Expert coverage of financial markets, investment strategies, personal finance, and economic trends.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Market Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Investment Strategies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Economic Trends
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Business
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Compelling stories about entrepreneurship, corporate strategy, innovation, and market dynamics.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Startup Ecosystems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Corporate Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Market Research
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section id="articles" className="py-24">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
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
                  <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 relative overflow-hidden">
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
                  <button className="text-green-600 dark:text-green-400 hover:underline font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
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
                  <button className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Cryptocurrency
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  NFTs Beyond Art: Real-World Applications
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  Discovering innovative use cases for NFT technology in supply chain, identity verification, and more.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>8 min read</span>
                  <button className="text-orange-600 dark:text-orange-400 hover:underline font-medium">
                    Read More →
                  </button>
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
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
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
    </div>
  );
}
