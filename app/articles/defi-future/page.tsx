import Link from 'next/link';

export default function DeFiArticle() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
            ← Back to Portfolio
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Cryptocurrency
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm">5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The Future of Decentralized Finance
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Exploring how DeFi protocols are reshaping traditional finance and creating new opportunities for financial inclusion.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>By Pitso Manyike</span>
            <span>•</span>
            <span>November 8, 2025</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl h-64 mb-8 flex items-center justify-center">
            <span className="text-6xl">₿</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Decentralized Finance (DeFi) has emerged as one of the most transformative innovations in the financial sector. 
            By leveraging blockchain technology, DeFi platforms are creating a more accessible, transparent, and efficient 
            financial ecosystem that operates without traditional intermediaries.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            What Makes DeFi Revolutionary?
          </h2>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Unlike traditional finance, which relies on banks and financial institutions, DeFi applications run on 
            decentralized networks using smart contracts. This fundamental shift eliminates many of the barriers that 
            have historically prevented billions of people from accessing financial services.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
            Key Benefits of DeFi
          </h3>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Accessibility:</strong> Anyone with an internet connection can access DeFi services, 
                regardless of their location or credit history.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Transparency:</strong> All transactions are recorded on public blockchains, 
                providing unprecedented visibility into financial operations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Lower Costs:</strong> By eliminating intermediaries, DeFi significantly reduces 
                transaction fees and processing times.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Innovation:</strong> Open-source protocols enable rapid development of new 
                financial products and services.
              </span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Real-World Applications
          </h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            DeFi isn&apos;t just theoretical—it&apos;s already powering real financial services used by millions worldwide. 
            From decentralized exchanges (DEXs) like Uniswap to lending platforms like Aave and Compound, the DeFi 
            ecosystem offers alternatives to virtually every traditional financial service.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <p className="text-slate-700 dark:text-slate-300 italic">
              &quot;DeFi represents a fundamental reimagining of how financial services can operate—more inclusive, 
              more transparent, and more efficient than ever before.&quot;
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Challenges and Considerations
          </h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            While DeFi holds immense promise, it&apos;s not without challenges. Smart contract vulnerabilities, regulatory 
            uncertainty, and user experience barriers remain significant hurdles. However, as the technology matures 
            and best practices emerge, many of these challenges are being addressed.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Looking Ahead
          </h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            The future of DeFi is incredibly promising. As more users discover its benefits and developers continue 
            to innovate, we&apos;re likely to see DeFi protocols become increasingly integrated with traditional finance. 
            This convergence could create a financial system that combines the best of both worlds—the innovation 
            and accessibility of DeFi with the stability and security of traditional institutions.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            For individuals and businesses alike, understanding DeFi is no longer optional—it&apos;s essential for 
            navigating the future of finance.
          </p>
        </article>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
              PM
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                About Pitso Manyike
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Freelance writer specializing in cryptocurrency, finance, and business. Drawing from experience 
                in running a small business, Pitso creates content that provides practical value and actionable insights.
              </p>
              <Link href="/#contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Portfolio */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
