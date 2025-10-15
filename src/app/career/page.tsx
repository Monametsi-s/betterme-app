import Link from "next/link";

export default function CareerGuidance() {
  return (
    <div className="min-h-screen bg-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-800 mb-4">Career Guidance</h1>
          <p className="text-gray-600">Navigate career choices and build a fulfilling professional life in Botswana.</p>
        </header>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Understanding Botswana&apos;s Job Market</h2>
          <p className="text-gray-700 mb-4">
            Botswana faces high youth unemployment, but opportunities exist in growing sectors like mining,
            tourism, finance, and technology.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Growing IT and digital services sector</li>
            <li>Mining and natural resources</li>
            <li>Tourism and hospitality</li>
            <li>Education and healthcare</li>
            <li>Entrepreneurship and small business</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Career Planning Steps</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li><strong>Self-Assessment:</strong> Identify your interests, skills, and values.</li>
            <li><strong>Research:</strong> Learn about different careers and required qualifications.</li>
            <li><strong>Education:</strong> Pursue relevant training or higher education.</li>
            <li><strong>Networking:</strong> Connect with professionals in your field of interest.</li>
            <li><strong>Gain Experience:</strong> Seek internships, volunteering, or entry-level positions.</li>
            <li><strong>Continuous Learning:</strong> Stay updated with industry trends and skills.</li>
          </ol>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Skills for the Future</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Digital Skills</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Computer literacy</li>
                <li>Basic programming</li>
                <li>Digital marketing</li>
                <li>Data analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Communication</li>
                <li>Problem-solving</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Resources in Botswana</h2>
          <ul className="space-y-2">
            <li><strong>Botswana Youth</strong> - Programs for youth employment</li>
            <li><strong>DITEC</strong> - Department of Information Technology and Education</li>
            <li><strong>BECI</strong> - Botswana Employers Confederation</li>
            <li><strong>Local Universities</strong> - University of Botswana, Botswana International University of Science and Technology</li>
            <li><strong>Skills Development Programs</strong> - Vocational training centers</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Entrepreneurship Option</h2>
          <p className="text-gray-700 mb-4">
            If traditional employment is challenging, consider starting your own business.
            Botswana has support programs for young entrepreneurs.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Identify a problem you can solve</li>
            <li>Start small with available resources</li>
            <li>Seek mentorship and training</li>
            <li>Utilize government grants and loans</li>
          </ul>
        </section>

        <div className="text-center">
          <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}