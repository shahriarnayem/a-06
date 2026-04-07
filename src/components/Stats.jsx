export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-900 py-16">
      
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between text-white text-center">

          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold">50K+</h2>
            <p className="mt-2 text-white/80">Active Users</p>
          </div>

          <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold">200+</h2>
            <p className="mt-2 text-white/80">Premium Tools</p>
          </div>

          <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold">4.9</h2>
            <p className="mt-2 text-white/80">Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
}