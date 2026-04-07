import { FaUser, FaBoxOpen, FaRocket } from "react-icons/fa";

export default function Steps() {
  const steps = [
    {
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: FaUser,
    },
    {
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: FaBoxOpen,
    },
    {
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: FaRocket,
    },
  ];

  return (
    <section className="py-20 bg-base-200 text-center">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl lg:text-4xl font-bold text-base-content">
          Get Started In 3 Steps
        </h2>

        <p className="mt-4 text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition"
              >

                <span className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-purple-900 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-6">
                  <Icon className="text-purple-600 text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-base-content">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}