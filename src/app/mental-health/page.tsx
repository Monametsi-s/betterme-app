import Link from "next/link";

export default function MentalHealth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 p-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 group animate-slide-in-left">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>

          <header className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl mb-4 mx-auto animate-bounce-in">
              <span className="text-4xl">🧠</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4">
              Mental Health Support
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your mental health matters. Learn to manage stress and build resilience.
            </p>
          </header>

          <div className="space-y-6">
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">💭</span>
                </div>
                <h2 className="text-2xl font-bold text-purple-800">Understanding Mental Health</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Common challenges include stress, anxiety, depression, and low self-esteem. Remember, it&apos;s okay to not be okay sometimes.
              </p>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🌬️</span>
                </div>
                <h2 className="text-2xl font-bold text-purple-800">Stress Management Techniques</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {icon: '🫁', title: 'Deep Breathing', desc: 'Try the 4-7-8 technique: Inhale for 4 seconds, hold for 7, exhale for 8.'},
                  {icon: '🧘', title: 'Mindfulness', desc: 'Practice being present. Apps like Headspace can help get started.'},
                  {icon: '🏃', title: 'Physical Activity', desc: 'Exercise releases endorphins that naturally boost mood.'},
                  {icon: '😴', title: 'Healthy Sleep', desc: 'Aim for 7-9 hours. Establish a consistent sleep schedule.'}
                ].map((technique, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl mb-3">{technique.icon}</div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{technique.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{technique.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">💪</span>
                </div>
                <h2 className="text-2xl font-bold text-purple-800">Building Resilience</h2>
              </div>
              <ul className="space-y-3">
                {[
                  {title: 'Positive relationships', desc: 'Connect with supportive people.'},
                  {title: 'Self-care', desc: 'Take time for activities you enjoy.'},
                  {title: 'Problem-solving', desc: 'Break challenges into manageable steps.'},
                  {title: 'Optimism', desc: 'Focus on what you can control and learn from setbacks.'}
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-800">{item.title}:</strong>
                      <span className="text-gray-600"> {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🆘</span>
                </div>
                <h2 className="text-2xl font-bold text-purple-800">When to Seek Help</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">If you&apos;re experiencing:</p>
              <ul className="space-y-3 mb-6">
                {['Persistent sadness or hopelessness', 'Severe anxiety that interferes with daily life', 'Thoughts of self-harm', 'Difficulty functioning in work/school'].map((symptom, idx) => (
                  <li key={idx} className="flex items-start bg-red-50 p-3 rounded-lg border border-red-100">
                    <span className="text-red-500 mr-2 mt-1">!</span>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-4 rounded-xl border border-purple-200">
                <p className="text-gray-700">
                  Contact a mental health professional. In Botswana, reach out to local clinics or organizations like Mental Health Botswana.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}