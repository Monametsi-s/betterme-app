import Link from "next/link";

export default function AddictionRecovery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 p-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group animate-slide-in-left">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>

          {/* Header */}
          <header className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl mb-4 mx-auto animate-bounce-in">
                <span className="text-4xl">💪</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Addiction Recovery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step towards a healthier life. You&apos;re not alone in this journey.
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-6">
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">📋</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">Understanding Addiction</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Addiction affects many aspects of life, including health, relationships, and productivity.
                Recognizing the signs is the first step to recovery.
              </p>
              <ul className="space-y-3">
                {['Loss of control over substance use', 'Continued use despite negative consequences', 'Withdrawal symptoms when not using', 'Tolerance - needing more to achieve the same effect'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">Recovery Strategies</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {icon: '👨‍⚕️', title: 'Seek Professional Help', desc: 'Consult with counselors, therapists, or support groups. In Botswana, contact local health services or organizations like Botswana Network of People Living with HIV/AIDS for support.'},
                  {icon: '🤝', title: 'Build a Support Network', desc: 'Surround yourself with positive influences. Share your goals with trusted friends and family.'},
                  {icon: '🏃', title: 'Develop Healthy Habits', desc: 'Exercise regularly, eat nutritious foods, and engage in hobbies that bring joy.'},
                  {icon: '📊', title: 'Set Realistic Goals', desc: 'Take small steps. Celebrate progress, no matter how small.'}
                ].map((strategy, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl mb-3">{strategy.icon}</div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{strategy.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{strategy.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">📚</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">Resources</h2>
              </div>
              <ul className="space-y-3">
                {['Botswana Substance Abuse Helpline', 'WHO Addiction Resources', 'Local Support Groups'].map((resource, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                      <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}