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

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Daily Affirmations</h2>
          <p className="text-gray-700 mb-4">Repeat these affirmations daily to build self-confidence:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-100 p-4 rounded">
              <p className="text-gray-800 italic">&quot;I am capable of achieving my goals.&quot;</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <p className="text-gray-800 italic">&quot;I choose to focus on the positive.&quot;</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <p className="text-gray-800 italic">&quot;I am worthy of love and respect.&quot;</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <p className="text-gray-800 italic">&quot;Every challenge is an opportunity to grow.&quot;</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Inspiring Quotes</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-700">
              &quot;The only way to do great work is to love what you do.&quot; - Steve Jobs
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-700">
              &quot;Believe you can and you&apos;re halfway there.&quot; - Theodore Roosevelt
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-700">
              &quot;Your attitude determines your direction.&quot; - Ralph Waldo Emerson
            </blockquote>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Positivity Activities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Gratitude Journal:</strong> Write down 3 things you&apos;re grateful for each day.</li>
            <li><strong>Random Acts of Kindness:</strong> Do something nice for someone else.</li>
            <li><strong>Positive Visualization:</strong> Spend 5 minutes imagining your best self.</li>
            <li><strong>Surroundings Check:</strong> Declutter your space and add uplifting elements.</li>
            <li><strong>Morning Routine:</strong> Start your day with positive affirmations and stretching.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Overcoming Negative Thoughts</h2>
          <p className="text-gray-700 mb-4">When negative thoughts arise:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Acknowledge the thought without judgment.</li>
            <li>Challenge it: Is this thought based on facts or assumptions?</li>
            <li>Replace with a positive, realistic alternative.</li>
            <li>Focus on solutions rather than problems.</li>
          </ol>
        </section>

        <div className="text-center">
          <Link href="/" className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}