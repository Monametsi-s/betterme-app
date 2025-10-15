import Link from "next/link";

export default function Positivity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 p-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8 group animate-slide-in-left">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>

          <header className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl mb-4 mx-auto animate-bounce-in">
              <span className="text-4xl">✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Positivity Boost
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cultivate optimism, self-confidence, and a positive mindset.
            </p>
          </header>

          <div className="space-y-6">
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">💖</span>
                </div>
                <h2 className="text-2xl font-bold text-yellow-800">Daily Affirmations</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">Repeat these affirmations daily to build self-confidence:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'I am capable of achieving my goals.',
                  'I choose to focus on the positive.',
                  'I am worthy of love and respect.',
                  'Every challenge is an opportunity to grow.'
                ].map((affirmation, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold italic text-center">&quot;{affirmation}&quot;</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">💬</span>
                </div>
                <h2 className="text-2xl font-bold text-yellow-800">Inspiring Quotes</h2>
              </div>
              <div className="space-y-4">
                {[
                  {quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs'},
                  {quote: 'Believe you can and you&apos;re halfway there.', author: 'Theodore Roosevelt'},
                  {quote: 'Your attitude determines your direction.', author: 'Ralph Waldo Emerson'}
                ].map((item, idx) => (
                  <blockquote key={idx} className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 pl-6 py-4 rounded-r-xl hover:shadow-md transition-shadow">
                    <p className="text-gray-700 italic mb-2">&quot;{item.quote}&quot;</p>
                    <cite className="text-yellow-700 font-semibold not-italic">- {item.author}</cite>
                  </blockquote>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-yellow-800">Positivity Activities</h2>
              </div>
              <ul className="space-y-3">
                {[
                  {icon: '📔', title: 'Gratitude Journal', desc: 'Write down 3 things you&apos;re grateful for each day.'},
                  {icon: '🤝', title: 'Random Acts of Kindness', desc: 'Do something nice for someone else.'},
                  {icon: '🌟', title: 'Positive Visualization', desc: 'Spend 5 minutes imagining your best self.'},
                  {icon: '🏡', title: 'Surroundings Check', desc: 'Declutter your space and add uplifting elements.'},
                  {icon: '🌅', title: 'Morning Routine', desc: 'Start your day with positive affirmations and stretching.'}
                ].map((activity, idx) => (
                  <li key={idx} className="flex items-start bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-100">
                    <span className="text-2xl mr-4">{activity.icon}</span>
                    <div>
                      <strong className="text-gray-800 block mb-1">{activity.title}:</strong>
                      <span className="text-gray-600">{activity.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🔄</span>
                </div>
                <h2 className="text-2xl font-bold text-yellow-800">Overcoming Negative Thoughts</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">When negative thoughts arise:</p>
              <ol className="space-y-4">
                {[
                  'Acknowledge the thought without judgment.',
                  'Challenge it: Is this thought based on facts or assumptions?',
                  'Replace with a positive, realistic alternative.',
                  'Focus on solutions rather than problems.'
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}