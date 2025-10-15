import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-16 max-w-4xl animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce-in">
                <span className="text-2xl">🌟</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                BetterMe
              </h1>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4 animate-slide-up">
            Empowering Botswana&apos;s Youth
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Your personal companion for overcoming challenges, making smart choices, and building a brighter future
          </p>
        </header>

        {/* Cards Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {/* Addiction Recovery Card */}
          <Link 
            href="/addiction" 
            className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift border border-white/20 overflow-hidden animate-slide-in-left"
            style={{animationDelay: '0.1s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">💪</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Addiction Recovery
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Resources and support to overcome addictions to drugs, gambling, and more.
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Decision Making Card */}
          <Link 
            href="/decisions" 
            className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift border border-white/20 overflow-hidden animate-slide-in-left"
            style={{animationDelay: '0.2s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Smart Decisions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tools and guidance for making informed choices in life, relationships, and career.
              </p>
              <div className="mt-4 flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Mental Health Card */}
          <Link 
            href="/mental-health" 
            className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift border border-white/20 overflow-hidden animate-slide-in-left"
            style={{animationDelay: '0.3s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🧠</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                Mental Health
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Strategies to manage stress, anxiety, and build emotional resilience.
              </p>
              <div className="mt-4 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Positivity Card */}
          <Link 
            href="/positivity" 
            className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift border border-white/20 overflow-hidden animate-slide-in-right"
            style={{animationDelay: '0.4s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                Positivity Boost
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Affirmations, quotes, and activities to cultivate optimism and self-confidence.
              </p>
              <div className="mt-4 flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Career Guidance Card */}
          <Link 
            href="/career" 
            className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift border border-white/20 overflow-hidden animate-slide-in-right"
            style={{animationDelay: '0.5s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                Career Guidance
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Advice for navigating career choices in Botswana&apos;s job market.
              </p>
              <div className="mt-4 flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-gray-600">Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-gray-600">for Botswana&apos;s youth</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
