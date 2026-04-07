export default function Hero() {
  return (
    <section className="bg-base-200 py-10 px-5 md:py-12 lg:py-20">
      
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center">

        <div>
          
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-base-content leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="mt-6 text-gray-500 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="btn btn-primary rounded-full px-6">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full px-6">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="hero"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}