import Link from 'next/link';

export default function InvestmentStrategiesArticle() {
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              Finance
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm">7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Investment Strategies for 2025
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            A comprehensive guide to navigating market volatility and building a resilient investment portfolio in today&apos;s dynamic financial landscape.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>By Pitso Manyike</span>
            <span>•</span>
            <span>November 8, 2025</span>
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl h-64 mb-8 flex items-center justify-center">
            <span className="text-6xl">💹</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            As we navigate through 2025, investors face a unique set of challenges and opportunities. From rising 
            interest rates to technological disruption, the investment landscape is evolving rapidly. Success requires 
            not just knowledge, but also adaptability and a solid strategic framework.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Understanding Today&apos;s Market Environment
          </h2>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            The current market environment is characterized by several key factors: persistent inflation concerns, 
            digital transformation across industries, and increasing geopolitical complexity. Understanding these 
            dynamics is crucial for making informed investment decisions.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Core Investment Strategies for 2025
          </h2>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
            1. Diversification Beyond Borders
          </h3>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Traditional diversification isn&apos;t enough anymore. Savvy investors are looking beyond domestic markets 
            to include international equities, emerging markets, and alternative assets. This global approach helps 
            mitigate country-specific risks while capturing growth opportunities worldwide.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
            2. Technology and Innovation Focus
          </h3>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            The digital revolution continues to create wealth-building opportunities. Key sectors include artificial 
            intelligence, renewable energy, biotechnology, and blockchain applications. However, it&apos;s essential to 
            balance growth potential with valuation discipline.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Key Insight:</strong> Don&apos;t chase trends blindly. Invest in companies with solid fundamentals 
              and sustainable competitive advantages, even in high-growth sectors.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
            3. Fixed Income Reimagined
          </h3>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            With interest rates stabilizing at higher levels, bonds are once again offering attractive yields. 
            Consider laddering strategies, high-quality corporate bonds, and Treasury Inflation-Protected Securities 
            (TIPS) to balance your portfolio while generating income.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
            4. Alternative Investments
          </h3>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Real estate, commodities, and digital assets can provide valuable portfolio diversification. These 
            alternatives often have low correlation with traditional stocks and bonds, offering potential downside 
            protection during market turbulence.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Risk Management Principles
          </h2>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Never invest more than you can afford to lose</strong> – Maintain an emergency fund covering 
                6-12 months of expenses before making aggressive investments.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Rebalance regularly</strong> – Review your portfolio quarterly and rebalance to maintain 
                your target asset allocation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Think long-term</strong> – Short-term market volatility is normal. Stay focused on your 
                long-term goals rather than reacting to daily fluctuations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Understand what you own</strong> – Only invest in assets you thoroughly understand. 
                If you can&apos;t explain an investment simply, you shouldn&apos;t own it.
              </span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Tax-Efficient Investing
          </h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            It&apos;s not just about what you earn—it&apos;s about what you keep. Utilize tax-advantaged accounts, 
            consider tax-loss harvesting strategies, and be mindful of holding periods to minimize your tax burden 
            and maximize after-tax returns.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
            Building Your Action Plan
          </h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Start by assessing your current financial situation, defining clear goals, and determining your risk 
            tolerance. Then, construct a diversified portfolio that aligns with these parameters. Remember, the best 
            investment strategy is one you can stick with through market ups and downs.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            The key to successful investing in 2025 isn&apos;t about finding a single winning strategy—it&apos;s about 
            building a comprehensive, well-balanced approach that can weather various market conditions while 
            positioning you for long-term growth.
          </p>
        </article>

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
