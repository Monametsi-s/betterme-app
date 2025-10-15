import Link from "next/link";

export default function DecisionMaking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 p-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 group animate-slide-in-left">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>

          <header className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl mb-4 mx-auto animate-bounce-in">
              <span className="text-4xl">🎯</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Smart Decision Making
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn to make choices that align with your values and long-term goals.
            </p>
          </header>

          <div className="space-y-6">
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🧭</span>
                </div>
                <h2 className="text-2xl font-bold text-green-800">Decision-Making Process</h2>
              </div>
              <ol className="space-y-4">
                {[
                  {step: 'Identify the decision', desc: 'Clearly define what you need to decide.'},
                  {step: 'Gather information', desc: 'Research options and potential outcomes.'},
                  {step: 'Consider values', desc: 'Think about what matters most to you.'},
                  {step: 'Evaluate options', desc: 'Use tools like pros/cons lists.'},
                  {step: 'Make the choice', desc: 'Trust your judgment and take action.'},
                  {step: 'Reflect', desc: 'Learn from the outcome for future decisions.'}
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <strong className="text-gray-800 block mb-1">{item.step}:</strong>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">⚖️</span>
                </div>
                <h2 className="text-2xl font-bold text-green-800">Pros and Cons Tool</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">For your next big decision, try this simple exercise:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">👍</span>
                    <h3 className="font-bold text-lg text-green-700">Pros (Benefits)</h3>
                  </div>
                  <ul className="space-y-2">
                    {['Positive outcomes', 'Alignment with goals', 'Long-term benefits'].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">👎</span>
                    <h3 className="font-bold text-lg text-red-700">Cons (Drawbacks)</h3>
                  </div>
                  <ul className="space-y-2">
                    {['Potential risks', 'Short-term challenges', 'Opportunity costs'].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-red-500 mr-2">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">💡</span>
                </div>
                <h2 className="text-2xl font-bold text-green-800">Common Decision Areas</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {icon: '❤️', title: 'Relationships', desc: 'Consider compatibility, shared values, and mutual respect.'},
                  {icon: '🎓', title: 'Education', desc: 'Think about interests, job prospects, and personal growth.'},
                  {icon: '💰', title: 'Finances', desc: 'Balance needs with wants, plan for the future.'},
                  {icon: '🏥', title: 'Health', desc: 'Prioritize well-being and seek professional advice when needed.'}
                ].map((area, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl mb-3">{area.icon}</div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}