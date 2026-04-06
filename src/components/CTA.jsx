export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-24 text-center text-white">

      <div className="max-w-[900px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="mt-6 text-white/80">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <button className="btn bg-white text-purple-600 hover:bg-gray-100 rounded-full px-6">
            Explore Products
          </button>

          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-6">
            View Pricing
          </button>

        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-sm text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </section>
  );
}